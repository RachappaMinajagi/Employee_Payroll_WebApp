window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th>" +
                    "<th>Department</th><th>Salary</th><th>Start Date</th>" +
                    "<th>Actions</th>";
    let innerHtml = `${headerHtml}`;
    //to view tabular form using json
    let empPayrollList = createEmployeePayrollJSON();  
    for ( const empPayrollData of empPayrollList) {
        innerHtml = `${innerHtml}
        <tr>
            <td>
                <img class="profile" alt="" src="${EmployeePayrollData._profilePic}">
            </td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>
                ${getDeptHtml(empPayrollData._department)}
            </td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._start_date}</td>
            <td>
                <img id="1" onclick="remove(this)" alt="delete"
                            src="../Assets/Icons/delete-black-18dp.svg">
                <img id="1" onclick="update(this)" alt="edit"
                            src="../Assets/Icons/create-black-18dp.svg">           
            </td>
        </tr>
        `;
    }
    document.querySelector("#display").innerHTML = innerHtml;
};

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for ( const dept of deptList ) {
        deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`
    }
    return deptHtml;
}
//defing createEmployeePayrollJSON ()
const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
        {
            _name: 'Rachoti Minajagi',
            _gender: 'Male',
            _department: [
                'Engineering', 'HR'
            ],
            _salary: '800000',
            _start_date: '01 jan 2020',
            _note: '',
            _profilePic: '../Assets/Profile_images/Ellipse -1.png'
        },
        {
            _name: 'praveen k',
            _gender: 'Male',
            _department: [
                'HR', 'Finance'
            ],
            _salary: '400000',
            _start_date: '01 Feb 2020',
            _note: '',
            _profilePic: '../Assets/Profile_images/Ellipse -3.png'
        }
    ]
    return empPayrollListLocal;
}