import React from "react";
import { useState } from "react/cjs/react.development";
import { dbService } from "fbase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const Home = () => {
  const [nweet, setNweet] = useState("");

  const onSubmit = async(event) => {
    event.preventDefault();

    await addDoc(collection(dbService, "nweets"), {
      nweet,
      createdAt: serverTimestamp(),
      });
    setNweet("");
  };
  const onChange = (event) => {
    const { 
      target:{value}
    } = event;
    setNweet(value);
  };
  return(
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="What's on yout mind?"
          maxLength={120} 
        />
        <input type="submit" value="Nweet" />
      </form>
    </div>
  )
  
}


export default Home;