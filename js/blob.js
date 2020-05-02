const uploadBlobArrayBuffer =  () =>{
    let blob_url = 'https://drive.google.com/file/d/1arLIvFByuCM1uEUAeF9brHVz7UrvIu8g/view?usp=sharing';
    
    return new Promise(function (resolve, reject) {
      let array;
      let xhr = new XMLHttpRequest();
      xhr.responseType = "arraybuffer";
      xhr.open("GET", blob_url );
      
      xhr.onload = function () {
        let blob;
          if (this.status >= 200 && this.status < 300) {
              resolve(xhr.response);
              blob = xhr.response;
              let uint8Array;
              
              uint8Array  = new Uint8Array(blob);
              let a = new Blob([uint8Array], {type: 'application/pdf'});
              blobUrl = urlCreator.createObjectURL(a)
              console.log(blobUrl,"blobUrlblobUrlblobUrlblobUrl")
          } else {
              reject({
                  status: this.status,
                  statusText: xhr.statusText
              });
          }
      };
      xhr.onerror = function () {
          reject({
              status: this.status,
              statusText: xhr.statusText
          });
      };
      xhr.send();
      debugger

      
    });
 
 }