import nc from 'next-connect';
import { auth, db } from '../../firebase';

const handler = nc();

handler.get(async (req, res) => {
  if (auth.currentUser) {
    let locations = [];
    await db
      .collection('locations')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          locations.push({
            loc: doc.id,
          });
        });
      });
    return res.status(200).json(locations);
  } else {
    return res.status(200).send({ message: 'Unauthorized request!' });
  }
});
export default handler;
