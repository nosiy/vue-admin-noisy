<template>
  <div>
    <el-upload
      class="avatar-uploader"
      :action="actionUrl"
      :data="uploadData"
      :name="name"
      :headers="{ Authorization: `${Authorization}` }"
      :show-file-list="false"
      :before-upload="beforeAvatarUpload"
      :on-progress="handleOnProgress"
      :on-success="handleAvatarSuccess"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>


<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<script>
import Compressor from 'compressorjs';
export default {
  data () {
    return {
      // actionUrl: 'https://jsonplaceholder.typicode.com/posts/',
      actionUrl: 'https://malaysia-api.gzdev888.com/api/v1/backend/upload-img',
      imageUrl: '',
      uploadData: {
        format: 'file'
      },
      name: 'image',
      uploadRight: true,
      Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEwMDEwLCJpc3MiOiJodHRwczovL21hbGF5c2lhLWFwaS5nemRldjg4OC5jb20vYXBpL3YxL2JhY2tlbmQvYXV0aC9sb2dpbiIsImlhdCI6MTYwNTY2NDg2NiwiZXhwIjoxNjA1NjY4NDY2LCJuYmYiOjE2MDU2NjQ4NjYsImp0aSI6IkoxM2NNaU1tdXJxUThsenEifQ.x05SGIhxoZfdB5UzBc47jvyem4lEBBP4yo_q4EER6bE',
      pictureSize: {
        width: 200,
        height: 200
      } //规定限制尺寸
    };
  },
  methods: {
    handleAvatarSuccess (res, file) {
      // console.log(res, file)
      // this.imageUrl = URL.createObjectURL(file.raw);
      this.imageUrl = res.data.url
    },
    handleOnProgress () { },
    beforeAvatarUpload (file) {
      let _this = this
      return new Promise((resolve, reject) => {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 10 // 判定图片大小是否小于10MB
        // const isSize = _this.imgSizeFrame(file); //尺寸限制
        if (isJPG && isLt2M) {
          let image = new Image(), resultBlob = '';
          image.src = URL.createObjectURL(file);
          image.onload = () => {
            // 调用方法获取blob格式，方法写在下边
            let { width } = image, { height } = image
            if (_this.pictureSize.width === width && _this.pictureSize.height === height) {
              new Compressor(file, {
                quality: 0.4,
                maxWidth: 150,
                maxHeight: 150,
                success (result) {
                  resolve(result)
                  console.log(result)
                  _this.$message.success('上传成功');
                },
                error (err) {
                  _this.$message.error(err);
                  reject(err)
                }
              });
              // resultBlob = _this.compressUpload(image, file);
              // resolve(resultBlob)
              // resolve()
            } else {
              _this.$message.error(`请上传${_this.pictureSize.width}*${_this.pictureSize.height}的尺寸`);
              reject()
            }
          }
          image.onerror = () => {
            reject()
          }
        } else {
          _this.$message.error('请上传不超过10M的尺寸和jpg的图片');
          return reject()
        }

      })
      // return this.ImageHolder(file)
    },
    // ImageHolder (file, url = '') {
    //   const isJPG = file.type === 'image/jpeg';
    //   const isLt2M = file.size / 1024 / 1024 < 10 // 判定图片大小是否小于10MB
    //   if (!isLt2M) {
    //     this.$message.error('上传头像图片大小不能超过 10MB!');
    //     return false
    //   }
    //   if (!isJPG) {
    //     this.$message.error('上传头像图片只能是 JPG 格式!');
    //     return false
    //   }
    //   if (!this.imgSizeFrame(file)) {
    //     return false; //尺寸限制
    //   }
    //   return this.imgCanvas(file)
    // },
    // imgCanvas (file) {
    //   // console.log('执行')
    //   let _this = this
    //   return new Promise((resolve, reject) => {
    //     let image = new Image(), resultBlob = '';
    //     image.src = URL.createObjectURL(file);
    //     image.onload = (e) => {
    //       resultBlob = _this.compressUpload(image);
    //       resolve(resultBlob)
    //     }
    //     image.onerror = () => {
    //       reject(false)
    //     }
    //   })
    // },
    compressUpload (image) {
      let canvas = document.createElement('canvas')
      let ctx = canvas.getContext('2d')
      let initSize = image.src.length
      let { width } = image, { height } = image
      canvas.width = width
      canvas.height = height
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(image, 0, 0, width, height)
      // 进行最小压缩0.1
      let compressData = canvas.toDataURL('image/jpeg', 0.5)
      // this.imageUrl = compressData
      // console.log(compressData, '压缩过后的base64')
      // 压缩后调用方法进行base64转Blob，方法写在下边
      let blobImg = this.dataURItoBlob(compressData)
      return blobImg
    },
    dataURItoBlob (data) {
      let byteString;
      if (data.split(',')[0].indexOf('base64') >= 0) {
        // 解码使用 base-64 编码的字符串。
        byteString = atob(data.split(',')[1])
      } else {
        // 通过 escape() 编码的字符串进行解码。
        byteString = unescape(data.split(',')[1])
      }
      let mimeString = data
        .split(',')[0]
        .split(':')[1]
        .split(';')[0];
      let ia = new Uint8Array(byteString.length)
      for (let i = 0; i < byteString.length; i += 1) {
        ia[i] = byteString.charCodeAt(i)
      }
      return new Blob([ia], { type: mimeString })
    },
    imgSizeFrame (file) {
      // console.log('执行')
      return new Promise((resolve, reject) => {
        let image = new Image();
        image.src = URL.createObjectURL(file);
        image.onload = (e) => {
          if (this.pictureSize.width === image.width && this.pictureSize.height === image.height) {
            this.$message.success('上传成功');
            resolve()
          } else {
            this.$message.error(`请上传${this.pictureSize.width}*${this.pictureSize.height}的尺寸`);
            reject(false)
          }
        }
        image.onerror = () => {
          reject(false)
        }
      })
    }
  }
}
</script>