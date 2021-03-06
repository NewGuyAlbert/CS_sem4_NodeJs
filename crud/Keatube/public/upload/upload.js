let fileValid = false;

function validateForm() {

    const title = document.forms.videoupload.title.value;
    const description = document.forms.videoupload.descriprion.value;

    const titleMaxLength = 128; 

    if (title.length === 0 || title.length > titleMaxLength) {
        return false;
    }
    
    const descriptionMaxLength = 2048;

    if (description.length > descriptionMaxLength) {
        return false;
    }

    return fileValid;
}

function handleFileUpload(files) {
    const file = files[0];
    const fileSize = file.size;
    const mimeArray = file.type.split("/");
    const fileType = mimeArray[0];

    if (fileType !== "video"){
        fileValid = false;
        return;
    }

    const fileSizeLimit = 262144000 //250 MB

    if (fileSize > fileSizeLimit){
        fileValid = false;
        return;
    }

    fileValid = true;
}
