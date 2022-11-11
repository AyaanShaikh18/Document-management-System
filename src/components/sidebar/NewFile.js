import React,{useState} from 'react'
import AddIcon from '@mui/icons-material/Add';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import '../../styles/NewFile.css'

import {store,db} from '../../firebase'
import { ref ,uploadBytes,getDownloadURL } from 'firebase/storage';
import {v4} from "uuid";

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { FileUpload } from '@mui/icons-material';
import { async } from '@firebase/util';

function getModalStyle() {
  return {
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
  },
}));

const NewFile = () => {
  const classes = useStyles();

  const [modalStyle] = useState(getModalStyle);

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false)
  const [url, setUrl] = useState('');


  const handleOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};

const handleChange = (e) => {
  if (e.target.files[0]) {
      setFile(e.target.files[0])
  }
}

// const handleUpload = () => {
//   setUploading(true)

//   store.ref(`files/${file.name}`).put(file).then(snapshot => {
//       console.log(snapshot)

//       store.ref('files').child(file.name).getDownloadURL().then(url => {
//           //post image inside the db

//           db.collection('myFiles').add({
//               timestamp: firebase.firestore.FieldValue.serverTimestamp(),
//               caption: file.name,
//               fileUrl: url,
//               size: snapshot._delegate.bytesTransferred,
//           })

//           setUploading(false)
//           setOpen(false)
//           setFile(null)
//       })

//       store.ref('files').child(file.name).getMetadata().then(meta => {
//           console.log(meta.size)
//       })

//   })
// }

const handleUpload = (e) => {
  setUploading(true);
if (file == null) return;
const fileRef = ref(store,`files/${file.name}`);

uploadBytes(fileRef,setFile).then(()=> {
  
  alert("file uploaded!");
  setUploading(false);
  setOpen(false);
  setFile(null);
});



  db.collection("myFiles").add({
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    caption: file.name,
    fileUrl: url,
    // size: snapshot._delegate.bytesTransferred,
    
  });

};
  return (
    <div className='newFile'>
      <div className='newFile__container' onClick={handleOpen}>
        <AddIcon />

        <p>New</p>

      </div>
      <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <p>Select files you want to upload!</p>
                    {
                        uploading ? (
                            <p>Uploading...</p>
                        ) : (
                                <>
                                    <input type="file" onChange={ (event) => {setFile(event.target.files[0])}} />
                                    <button onClick={handleUpload}>Upload</button>
                                </>
                            )
                    }
                </div>
      </Modal>
    </div>
  )
}

export default NewFile
// import React from 'react'
// import AddIcon from '@mui/icons-material/Add';

// import '../../styles/NewFile.css'

// const NewFile = () => {
//   return (
//     <div className='newFile'>
//       <div className='newFile__container'>
//         <AddIcon />

//         <p>New</p>

//       </div>
//     </div>
//   )
// }

// export default NewFile
