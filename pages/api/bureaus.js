import nc from 'next-connect';
import { auth, db } from '../../firebase';

const handler = nc();

handler.get(async (req, res) => {
  if (auth.currentUser) {
    let bureaus = [];
    await db
      .collection('locations')
      .doc('Timisoara')
      .get()
      .then((querySnapshot) => {
        bureaus.push({
          test: querySnapshot.data().test,
        });
      });
    return res.status(200).json(bureaus);
  } else {
    return res.status(200).send({ message: 'Unauthorized request!' });
  }
});

export default handler;
