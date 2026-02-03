let students = [];

function complianceVerification() {

    let hasMinor = students.some(stu => stu.age < 18);

    let allActive = students.every(stu => stu.status === "active");

    alert(
        `Có sinh viên < 18 tuổi: ${hasMinor}\n` +
        `Tất cả đều active: ${allActive}`
    );
}

complianceVerification();