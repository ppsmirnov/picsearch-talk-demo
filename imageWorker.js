const MAX_CANVAS_WIDTH = 480;
const MAX_CANVAS_HEIGHT = 320;

onmessage = async function(event) {
    const {file} = event.data;
    let img = await self.createImageBitmap(file);

    const canvas = new OffscreenCanvas(MAX_CANVAS_WIDTH, MAX_CANVAS_HEIGHT);

    let ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    let width = img.width;
    let height = img.height;

    // если картинка больше заданных констант, то изменяем её размер
    if (width > height && width > MAX_CANVAS_WIDTH) {
        height *= MAX_CANVAS_WIDTH / width;
        width = MAX_CANVAS_WIDTH;
    } else if (height > MAX_CANVAS_HEIGHT) {
        width *= MAX_CANVAS_HEIGHT / height;
        height = MAX_CANVAS_HEIGHT;
    }

    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, width, height);

    const blob = await canvas.convertToBlob();

    if (blob) {
      postMessage(blob);
    }
  }
