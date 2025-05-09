const employee_link = "https://urban-couscous-7vw65wrgpgxjfxq96-6006.app.github.dev/employee"; 
fetch(employee_link).then(response=>{
    if(!response.ok){
        throw new Error("Failed to fetch data from given URL")
    }
    return response.json();
}).then(data=>{
    const tbody = document.querySelector("#employeetable tbody");

    data.forEach(c=>{
        const row = document.createElement("tr");
        row.innerHTML = `
        <td>${c.employee_id}</td>
        <td>${c.first_name}</td>
        <td>${c.last_name}</td>
        <td>${c.email}</td>
        <td>${c.phone_number}</td>
        <td>${c.hire_date}</td>
        <td>${c.job_id}</td>
        <td>${c.salary}</td>
        <td>${c.comission_pct}</td>
        <td>${c.manager_id}</td>
        <td>${c.department_id}</td>
        `;

        tbody.appendChild(row);
    });
}).catch(err=>{
    console.log(err.message);
});