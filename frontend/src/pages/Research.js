import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const ShowResearch = () => {
  const checkToken = localStorage.getItem('token');
  if (!checkToken) {
    window.location.href = '/login';
  }

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h6" component="div">
            หัวข้องานวิจัย : การพัฒนาระบบตรวจเช็คการเข้าเรียนอัตโนมัติด้วยเทคโนโลยีการจดจำใบหน้า for Javascript : Node กับ Deno กับ Bun
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ความคืบหน้างานวิจัย : ดบทที่ 1 : บทนำ,ความเป็นมาและความสำคัญ = Success / บทที่ 2 : ทฤษฏีที่เกี่ยวข้องและเอกสารอ้างอิง = Success / บทที่ 3 : วิธีการดำเนินงาน = Processing / บทที่ 4 : ผลการดำเนินงาน = Processing / บทที่ 5 : สรุปผลการดำเนินงาน = Processing
          </Typography>
        </CardContent>
        <a href="/">Home</a>
      </Card>
    </div>
  );
};

export default ShowResearch;
