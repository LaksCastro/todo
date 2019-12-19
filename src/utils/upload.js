import firebase from "../firebase";
import { toast } from "react-toastify";

function createUniqueId() {
    var dt = new Date().getTime();
    var uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
        c
    ) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uuid;
}
export function uploadPhoto(file, result, err) {
    const currentFile = file;
    const allowedTypes = [
        "image/jpg",
        "image/png",
        "image/jpeg",
        "image/webp",
        "image/gif",
        "image/svg+xml",
        "image/tiff"
    ];
    if (!allowedTypes.includes(currentFile.type)) {
        toast.error("Invalid file type, sorry :(");
        return;
    }

    if (currentFile.size / 1000000 > 15) {
        toast.info("Limit size is 15mb, sorry");
        return;
    }
    if (currentFile.size / 1000000 > 1)
        toast.info("Your image is larger than 1mb, it may take a while...");
    const ref = firebase.storage().ref();
    const name = createUniqueId() + "-" + currentFile.name;
    const metadata = {
        contentType: currentFile.type
    };
    const task = ref.child(name).put(currentFile, metadata);
    task.then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
            firebase.auth().currentUser.updateProfile({
                photoURL: url
            });
            result(url);
        })
        .catch(error => err(error));
}
