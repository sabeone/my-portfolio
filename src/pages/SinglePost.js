import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
// import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

// const builder = imageUrlBuilder(sanityClient);
// function urlFor(source) {
//   return builder.image(source);
// }

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();
  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
          title,
          _id,
          slug,
          mainImage{
              asset->{
                  _id,
                  url
              }
          },
          body
      }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!singlePost)
    return <div className="bg-rich-black text-green-400 m-8">Loading...</div>;

  return (
    <main className="bg-rich-black min-h-screen p-12 lg:p-36">
      <article className="container mx-auto bg-rich-black border-2 border-green-400 rounded-lg">
        <header className="relative">
          <div className="absolute h-full w-full flex items-center justify-center">
            <div className="border-2 border-white bg-white bg-opacity-75 rounded px-14 py-8">
              <h1 className="font-black text-3xl lg:text-6xl">
                {singlePost.title}
              </h1>
            </div>
          </div>
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            className="w-full object-cover rounded-t"
            style={{ height: "400px" }}
          />
        </header>
        <div className="text-gray-200 post-headings px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
          <BlockContent
            blocks={singlePost.body}
            projectId="d8magmr0"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
}
