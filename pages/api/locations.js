import nc from 'next-connect';
import { auth } from '../../firebase';

const handler = nc();

let locations = [];

handler.get((req, res) => {
  db.collection('locations')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        licee.push({
          title: doc.data().title,
          image: doc.data().image,
          desc: doc.data().desc,
          dif: doc.data().dif,
          link: doc.data().link,
        });
      });
    });

  res.statusCode(200).json({});
});
