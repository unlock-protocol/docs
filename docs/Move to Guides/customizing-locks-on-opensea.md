---
description: >-
  OpenSea is a large NFT marketplace. It is fairly centralized but will accept
  your locks and could even render them nicely if you follow the steps below!
---

# Customizing Locks on OpenSea

> This guide was contributed by Unlock's community member Croissant! Please make sure to follow [them on Twitter](https://twitter.com/croissanteth)!

In order to customize the appearance of a lock on [OpenSea](https://opensea.io), you will have to make some changes to the token’s metadata. By default, Unlock Protocol provides a generated image for each lock, with a basic description.&#x20;

But you can even host your own image and paste the link into the unlock dashboard (see this guide on how to [Customize the NFT Image](../customizing-the-nft.md)). Do note that this image has to be self-hosted, for it to always remain available. Going this route will make the images across all of the locks the image that was provided.

However, if you wanted to get really fancy with it, you’ll have to get your hands in some of the code. But don’t worry, this is standard practice for the thousands of NFT projects out there today and just requires a bit more work.

There are tons of tools that make this process simple with a drag and drop interface such as the [NFT Generator](https://nft-generator.art/app) app.

For my project and the purposes of this tutorial, I’ll be taking the [hashlips](https://github.com/HashLips) repo for reference on customizing the NFTs to fully customize the appearance of the locks.

1. [Click this link](https://github.com/HashLips/hashlips_art_engine)
2. Then, click the big green download button on GitHub. After downloading, extract the zip folder to reveal its contents.
3. Next, you’ll have to navigate over to a text editor of your choice (I highly recommend [Visual Studio Code](https://code.visualstudio.com/download))
4. Open the app, then click “file,” and open the folder we just extracted containing the hash lips repo.
5. From here, you’ll see folders containing the code we will work with to generate our own metadata.

The [hashlips read me](https://github.com/HashLips/hashlips_art_engine/blob/main/README.md) additionally has great documentation on how the code works and all of its features.

In the “layers” folder, you’ll see the template components of NFTs left for us by the creators of this repo. Inside of these folders, are images created by the project owner to form some sort of NFT.

You can change the name of the folders in layers to whatever “categories” or traits you want them to be called. For my project, I changed this to `bread type`, and `bakerynft.`

Inside of these folders, were the png images (or gifs) I created using an app called pixel studio with the file names `croissant` and `30-day membership`.

After making all changes that you wish here in these folders, you’ll need to adjust some of the other preconfigured code to match the newly added layers.

Click the `src` folder, then open the `config.js` file in the code editor. Here, you’ll be able to name your collection, insert a custom description that will show up on OpenSea, and insert the _token’s base uri_ (more on this later).

Next, delete the layers you are no longer using, or rename them accordingly. From top to bottom is the way they will show up when generated, so make sure the object in the background is first. Mine looked like this:

```javascript
const layerConfigurations = [
  {
    growEditionSizeTo: 5,
    layersOrder: [
      {
        name: "bakerynft",
      },
      {
        name: "bread type",
      },
    ],
  },
];
```

The `growEditionSizeTo` can be adjusted to how many NFTs you want in your collection.

After making all of the necessary changes and adjusting rarities how you want (more details in readme of the repo), save the `config.js` file in the text editor.

Next, open a terminal in visual studio in the root directory of the folder, type `npm install` then hit enter. (Note: you’ll need either [node](https://nodejs.org/en/) and yarn installed)

After running `npm install`, a node modules folder will be created containing all of this project’s dependencies. This is necessary for it to work.

Once you’ve installed dependencies, type the command `node index.js`

This will generate your collection of NFTs based on the newly inputted data and images. It may take a while depending on the size.

The program will output all of the images in a new build folder (if there are compiling errors make sure the math for rarities are adding up to 100). This build folder will have all of our images and generated metadata based on the descriptions, names, and baseuri’s we set in the `config.js` file. Don’t worry about `baseuri` yet.

After this, head over to [Pinata](https://www.pinata.cloud) and create an account for uploading files to [`IPFS`](https://ipfs.io). Note; if you don’t want the NFTs “revealed” prior to mint or metadata leaks, click the submarine option when uploading.

Once on Piñata, we’re going to take our folders generated in the build folder and upload them here. First, we will do the images folder containing all of the images in our collection. It is important not to mix these folders up. Once uploaded to Piñata, you’re going to want to grab the “`CID`” which is used to identify our content on the interplanetary file system. Copy the `CID` of the images folder you just uploaded, then head back on over to your code editor.

In the `src/config.js` file, this is where we will do some trickery. It is imperative you do not run `node index.js` again unless you want to upload the images again and start over.

To avoid regenerating images, but still be able to update this crucial data, we’ll use the command `node update_info.js`.

In the config.js file, take our copied CID from piñata for our images folder, and paste it where it says `baseUri.`

```javascript
// General metadata for Ethereum
const namePrefix = "Your Collection";
const description = "Remember to replace this description";
const baseUri = "ipfs://NewUriToReplace";
```

Mine looked something like this:

```javascript
const baseURI = "ipfs://QmZo9NZqQbEafu4KPofLhRiPW2wFtQduYHrvrcDkQcDpjM/";
```

**Note:** the ending “/“ is crucial.

After saving the changes made in the `config.js`, head on back to the terminal to run our `node update_info.js` command and we’ll have the metadata we're looking for.

There are also other things you can add for full optimization of appearance on OpenSea such as

- `external_url`: This is the URL that will appear below the asset's image on OpenSea and will allow users to leave OpenSea and view the item on your site
- `description` A human readable description of the item. Markdown is supported.&#x20;
- `name` Name of the item.&#x20;
- `attributes` These are the attributes for the item, which will show up on the OpenSea page for the item. (see below)&#x20;
- `background_color` Background color of the item on OpenSea. Must be a six-character hexadecimal without a pre-pended #.&#x20;
- `animation_url` A URL to a multi-media attachment for the item. The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV, and OGG are supported, along with the audio-only extensions MP3, WAV, and OGA. Animation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs using JavaScript canvas, WebGL, and more. Scripts and relative paths within the HTML page are now supported. However, access to browser extensions is not supported.&#x20;
- `youtube_url` A URL to a YouTube video&#x20;

Now is where the magic happens. We’re going to take our new metadata in the build folder, which has been updated to include the images `baseUri` generated that we uploaded to IPFS and use this to see it all work.

For some odd reason, the metadata would read wrong when I tried uploading the json to ipfs without doing this next step first.

I had to mass remove the .json file ext for OpenSea to read it right for all files in our json build. I did this by running "`ren .*json *` in the build folder, removing the json file extensions for all of the files. (your mileage may vary here).

Now back to Pinata, and upload your json folder from the build. Copy this new CID for use soon.

You will then have to deploy a lock, or visit the Etherscan page of an existing lock from the wallet you deployed with (the owner of the lock).

Navigate to the write contract page of the lock contract, then connect your wallet and scroll down to function called `setBaseTokenURI`. In the field, type `ipfs://YOUR-JSON-CID-HERE/`

**Note**: another important emphasis on the “/“ at the end here

Then click the _Write_ Button.

After the transaction is confirmed, if done correctly, you are all done!

#### Testing

OpenSea supports testing on Rinkeby. You can do all of the above and just use a lock on Rinkeby to test things. Then use this URL `https://testnets-api.opensea.io/asset/YOURLOCKADDRESSHERE/1/validate` to make sure OpenSea shows the right data! (Note: you’ll have to have at least a single key purchased) to view on OpenSea.

Sometimes OpenSea takes awhile to update metadata and it will take some time to propagate, but you can request a refresh by clicking the refresh button on the page for the item in the collection.

Congratulations! You know have fully customized locks on open sea!

Here’s a link to my collection: [https://opensea.io/collection/bakerynftv2](https://opensea.io/collection/bakerynftv2)

PS: follow me on Twitter: [@croissanteth](https://twitter.com/croissanteth)
