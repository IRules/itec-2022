import nc from 'next-connect';
import { auth, db } from '../../../../firebase';

const handler = nc();

handler.get(async (req, res) => {
  if (auth.currentUser) {
    let floors = [];
    await db
      .collection('locations')
      .doc(req.query.id)
      .collection('floors')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((colection) => {
          floors.push({
            floor: colection.id,
          });
        });
      });
    return res.status(200).json(floors);
  } else {
    return res.status(200).send({ message: 'Unauthorized request!' });
  }
});
export default handler;
