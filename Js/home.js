window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th>" +
                    "<th>Department</th><th>Salary</th><th>Start Date</th>" +
                    "<th>Actions</th>";
    const innerHtml = `${headerHtml}
    <tr>
      <td>
        <img class="Profile" alt="" src="../Assets/Profile-images/Ellipse -1.png">
      </td>
    <td>Rachoti Minajagi</td>
    <td>Male</td>
    <td>
        <div class="dept-label">HR</div>
        <div class="dept-label">Engineer</div>
        <div class="dept-label">sales</div>
    </td>
    <td>400000</td>
    <td>1 dec 2020</td>
    <td>
        <img id="1" onclick="remove(this)" alt="delete"
                    src="../Assets/Icons/delete-black-18dp.svg">
        <img id="1" onclick="update(this)" alt="edit"
                    src="../Assets/Icons/create-black-18dp.svg">           
    </td>
</tr>
`;
    document.querySelector("#display").innerHTML = innerHtml;
};