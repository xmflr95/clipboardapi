export default class ClipBoardAPI {
  constructor() {
    this.name = 'ClipBoardAPI';
    // this.permissions = navigator.permissions;
    // this.clipboard = navigator.clipboard;
    this.state;
  }

  checkWritePermission() {
    navigator.permissions.query({ name: 'clipboard-write' }).then(permission => {
      console.log(`write permission: ${permission.state}`);
    });
  }

  checkReadPermission() {
    navigator.permissions.query({ name: 'clipboard-read' }).then(permission => {
      this.state = permission.state;
      // [prompt, granted, denied]
      permission.onchange = () => {
        if ('prompt' === permission.state) {
          console.log('Not selected permission');          
        } else if ('granted' === permission.state) {
          console.log('Permission granted');
          this.state = permission.state;
        } else if ('denied' === permission.state) {
          console.log('Permission denied');
          alert('Please grant the clipboard user permission');
          this.state = permission.state;
        } else {
          console.log('else');
          thiss.stae = 'prompt';
        }
        console.log(this.state);
      };
    })
    .catch(err => {
      console.error(err);
    });
  } 
  
  static async write(value) {
    // const result = await navigator.clipboard.writeText(value);
    // const data = [
    //   new ClipboardItem({
    //     'text/plain': Promise.resolve(new Blob([value], { type: 'text/plain' }))
    //   })
    // ];
    if ('' === value || undefined === value || null === value) {
      return;
    }
    let item;
    item = writePlainText(value);

    // if ('' !== value && '' !== undefined) {
    //   item = writePlainText(value);
    // } else {
    //   item = [
    //     new ClipboardItem({
    //       [blob.type]: blob
    //     })
    //   ];
    // }
    // const imgURL = './setting.png';
    // const data = await fetch(imgURL);
    // console.log(data);
    // const blob = await data.blob();
    // console.log(blob);

    // await navigator.clipboard.write(item).then(() => {
    //   console.log('success save clipboard');
    // }).catch(err => {
    //   console.error(err);
    // });

    try {
      await navigator.clipboard.write(item);
      console.log('success save clipboard');
    } catch (err) {
      console.error(err);
    }

    // navigator.clipboard.writeText(value).then(() => {
    //   console.log('success');
    // })
    // .catch(err => {
    //   console.error(err);
    // });
  }

  static read() {
    navigator.clipboard.readText().then(text => {
      console.log(`Pasted content: ${text}`);
    })
    .catch(err => {
      console.error(err);
    });
  } 

  set state(value) {
    this._state = value;
  }
  get state() {
    return this._state;
  }
}

function writePlainText(value) {
  if (undefined === value || null === value) {
    value = '';
  }

  const item = [
    new ClipboardItem({
      'text/plain': Promise.resolve(new Blob([value], { type: 'text/plain' }))
    })
  ];
  return item;
}