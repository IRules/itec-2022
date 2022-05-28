import nc from 'next-connect';
import { auth, db } from '../../../firebase';

const handler = nc();

handler.get(async (req, res) => {
  if (auth.currentUser) {
    let isAdmin = false;
    await db
      .collection('admins')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.id == auth.currentUser.email) {
            isAdmin = true;
          }
        });
      });
    if (isAdmin == true) {
      return res.status(200).json({ isAdmin: true });
    } else {
      return res.status(200).send({ message: 'Unauthorized request!' });
    }
  } else {
    return res.status(200).send({ message: 'Unauthorized request!' });
  }
});
export default handler;
