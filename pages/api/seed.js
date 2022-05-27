import nc from 'next-connect';

const handler = nc();+

handler.get(async (req, res) => {
  return res.send({ message: `Don't seed more times!` });
});

export default handler;
