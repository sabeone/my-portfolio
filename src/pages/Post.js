import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

function Post() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
            title, 
            slug,
            projectType,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }|order(publishedAt desc)`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-rich-black min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl text-green-400 font-bold flex justify-center mb-10">
          Projects
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData &&
            postData.map((post, index) => (
              <article>
                <Link
                  to={"/projects/" + post.slug.current}
                  key={post.slug.current}
                >
                  <span className="group block h-64 relative rounded bg-gray-900 border-l-8 border-white hover:border-green-400 key={index}">
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="black absolute flex justify-start items-start">
                      <h3 className="text-gray-900 font-semibold text-lg font-blog px-1.5 py-1 bg-white group-hover:bg-green-400 bg-opacity-75 rounded-r">
                        {post.title}
                      </h3>
                    </span>
                    <span className="black absolute h-full flex justify-start items-end">
                      <h4 className="text-gray-900 italic font-blog px-1.5 py-1 bg-white group-hover:bg-green-400 bg-opacity-75 rounded-r">
                        {post.projectType}
                      </h4>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}

export default Post;
