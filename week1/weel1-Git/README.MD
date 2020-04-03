1. หน้าที่ของ Branch คืออะไร
#แตกกิ่งของโปรเจคให้ช่วยกันทำเป็นหลายๆส่วน
2. ในการพัฒนาตามหลัก Git-flow โดยมีทีม 2 คน ช่วยกันเขียนโค้ด โดยคนนึงเขียน API
และอีกคนเขียน Frontend เราจะแบ่ง Branch ออกเป็นแบบไหน
#master,API_develop,FRONTEDN_develop
3. หากเกิดบัคขึ้นที่ระบบ Production ซึ่งจะต้องแก้โค้ดใหม่ เราจะต้องแก้จาก Branch ไหน และสร้างเป็น Branch ประเภทไหน และจะต้อง Merge ไปที่ไหนเมื่อแก้ไขเสร็จ
#branchก่อนเป็นproduction สร้างใหม่เป็นประเภท bug fixed แล้วmergedไปที่production(ถ้าแก้เสร็จแล้ว)

4. สร้าง Git Repository ชื่อ MyWebProject พร้อมสร้างไฟล์ index.html ไว้ด้วย


4. สร้าง Repository และทดลองสร้างไฟล์ README.md ในโปรเจคของเรา โดยเขียนรายละเอียดเกี่ยวกับโปรเจคดังตัวอย่าง

5. สร้างไฟล์ about.html พร้อมใส่ชื่อของตัวเองลงไปในไฟล์นั้นแล้ว Add file ที่เพิ่มเข้ามาใหม่และ Commit การแก้ไขที่ทําไป โดยต้องยังอยู่ใน Branch master
6. สร้างไฟล์ใหม่ชื่อ App.html แล้วทําการ Commit และ Push ไฟล์ไปยัง Master Branch
7. ให้สร้าง Branch ชื่อ develop แล้ว Checkout ไปทํางานใน Branch develop จากนั้นให้แก้ไขไฟล์ index.html และ commit change


8. สร้างไฟล์ .gitignore โดยให้ ignore ไฟล์ทั้งหมดที่ลงท้ายด้วยนามสกุล .log และ .env และให้ Add file ใหม่
9. ให้ Commit และ Push การแก้ไขโดยใช้ Feature Branch แล้วสร้าง Pull request
10. ให้สร้าง Tag และ Release ของโปรเจคเวอร์ชั่น 1.0
