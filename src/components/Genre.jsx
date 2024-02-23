import React from "react";
import { useSelector } from "react-redux";
import "./genre.scss";

export default function Genre({ data }) {
  const { genres } = useSelector((state) => state.home);
  return (
    <div className="genres">
        {data?.map((g) => {
            if(!genres[g]?.name) return
            return (
                <div key = {g} className="genre">
                    {genres[g]?.name}
                </div>
            )
        })}
    </div>
  );
}
