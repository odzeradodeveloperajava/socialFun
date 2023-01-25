import dayjs from "dayjs";
import React, { useContext, useState, useEffect } from "react";

export default function Day({ day, rowIdx }) {

  return (
    <div className="day">
        {day.format("D")}
    </div>
  );
}