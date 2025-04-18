import express from "express";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json()); // to use post

//  gitHub
app.post("/github", async (req, res) => {
  try {
    let userName = req.body.userName;
    let outPut = await axios.get(`https://api.github.com/users/${userName}`);
    let gitData = outPut.data;
    // console.log(gitData);

    let name = gitData.name;
    let location = gitData.location;
    let bio = gitData.bio;
    let public_repo = gitData.public_repo;
    let followers = gitData.followers;
    let following = gitData.following;

    let gituser = {
      name,
      location,
      bio,
      public_repo,
      followers,
      following,
    };

    // res.status(200).json(gituser)

    res.status(200).send(`This is ${userName}'s GitGub Profile Viewer   :

            Name        :${name}
            Location    :${location}
            BIO         :${bio}
            Public Repo :${public_repo}
            Followers   :${followers}
            Following   :${following}
            `);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

//  listener
app.listen(PORT, () => {
  console.log(`The Server is UP and Running at ${PORT}`);
});
