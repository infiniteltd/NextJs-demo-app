import { MongoClient } from "mongodb";
// fetch /new-meetup
// POST /api/new-meetup

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        // const uri = 'mongodb+srv://chrissamps24:14cCVdJ25QlB2TK1@cluster0.pbdlods.mongodb.net/meetups?retryWrites=true&w=majority';

        const client = await MongoClient.connect('mongodb+srv://chrissamps24:QR9b6aZ1ErM5DrAE@cluster0.pbdlods.mongodb.net/meetups?retryWrites=true&w=majority');

        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({ message: 'Meetup inserted!' });
    }
}

export default handler;