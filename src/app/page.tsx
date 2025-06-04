import React from "react";
import PersonalProjects from "@/components/sections/PersonalProjects";
import Experiences from "@/components/sections/Experiences";
import Head from "@/components/sections/Head";
import SocialMedia from "@/components/sections/SocialMedia";
import RecentlyListenedSongs from "@/components/sections/RecentlyListenedSongs";
import Technologies from "@/components/sections/Technologies";
import Repositories from "@/components/sections/Repositories";
import RecentlyWatchedAnimes from "@/components/sections/RecentlyWatchedAnimes";
import Lanyard from "@/components/sections/Lanyard";
import Bookmarks from "@/components/sections/Bookmarks";
import BlogPosts from "@/components/sections/BlogPosts";
import Contact from "@/components/sections/Contact";

export const revalidate = 900;

export default function Page() {
  return (
    <>
      <div className="relative w-full rounded-lg border bg-card px-5 py-14 drop-shadow-2xl">
        <Lanyard />
        <Head />
      </div>
      <div className="grid w-full grid-cols-1 gap-x-5 gap-y-5 xl:grid-cols-2 xl:gap-y-10">
        <Experiences />
        <PersonalProjects />
      </div>
      <div className="grid w-full grid-cols-1 gap-x-5 gap-y-5 xl:auto-rows-[22rem] xl:grid-cols-3 xl:gap-y-10">
        <RecentlyWatchedAnimes />
        <RecentlyListenedSongs />
      </div>
      <div className="grid w-full grid-cols-1 gap-x-5 gap-y-5 xl:auto-rows-[22rem] xl:grid-cols-2 xl:gap-y-10">
        <Repositories />
        <SocialMedia />
      </div>
      <div className="grid w-full grid-cols-1 gap-x-5 gap-y-5 xl:auto-rows-[22rem] xl:grid-cols-4">
        <BlogPosts />
        <Bookmarks />
        <Technologies />
      </div>
      <div className="grid w-full grid-cols-1">
        <Contact />
      </div>
    </>
  );
}
