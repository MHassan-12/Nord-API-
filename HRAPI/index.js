const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',async(req,res)=>{
    try{
        res.json('Welcome to HR API');
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/country', async(req, res)=>{
    try{
        const result = await pool.query('Select * from countries');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/employee', async(req, res)=>{
    try{
        const result = await pool.query('Select * from employees');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/region', async(req, res)=>{
    try{
        const result = await pool.query('Select * from regions');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});


app.get('/employees-count', async(req, res)=>{
    try{
        const result = await pool.query('select count(*) from employees');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});



app.get('/Q40', async(req, res)=>{
    try{
        const result = await pool.query('select e.*, l.city, c.country_name from employees as e inner join departments as d ON e.department_id = d.department_id inner join locations as l ON d.location_id = l.location_id inner join countries as c ON l.country_id = c.country_id;');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});


app.get('/Q41', async(req, res)=>{
    try{
        const result = await pool.query('select jh.*, e.first_name, e.last_name from job_history as jh inner join employees as e on jh.employee_id = e.employee_id');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});


app.get('/Q42', async(req, res)=>{
    try{
        const result = await pool.query('SELECT e.*, jh.* FROM employees as e inner join job_history as jh ON e.employee_id = jh.employee_id');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});


app.get('/Q43', async(req, res)=>{
    try{
        const result = await pool.query(' SELECT e.*, jh.*, d.department_name FROM employees as e inner join job_history as jh ON e.employee_id = jh.employee_id inner join departments as d on e.department_id = d.department_id');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});


app.get('/Q44', async(req, res)=>{
    try{
        const result = await pool.query('select e.*, jh.*, d.department_name, l.city from employees as e inner join job_history as jh on e.employee_id = jh.employee_id inner join departments as d on jh.department_id = d.department_id inner join locations as l on d.location_id = l.location_id');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});


app.get('/Q45', async(req, res)=>{
    try{
        const result = await pool.query('select e.*, jh.*, c.country_name from employees as e inner join job_history as jh on e.employee_id = jh.employee_id inner join departments as d on e.department_id = d.department_id inner join locations as l on d.location_id = l.location_id inner join countries as c on l.country_id = c.country_id');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});



app.get('/Q46', async(req, res)=>{
    try{
        const result = await pool.query('select jh.*, concat(e.first_name,  e.last_name) as Employee_Name, d.department_name FROM job_history as jh inner join employees as e on jh.employee_id = e.employee_id inner join departments as d on jh.department_id = d.department_id');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/Q47', async(req, res)=>{
    try{
        const result = await pool.query('select jh.*, concat(e.first_name, e.last_name) as Employee_Name, j.job_title FROM job_history as jh inner join employees as e on jh.employee_id = e.employee_id inner join jobs as j on jh.job_id = j.job_id');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});



app.get('/Q48', async(req, res)=>{
    try{
        const result = await pool.query('select jh.*, e.first_name, e.last_name, j.job_title, d.department_name from job_history as jh inner join employees as e on jh.employee_id = e.employee_id inner join jobs as j on jh.job_id = j.job_id inner join departments as d on jh.department_id = d.department_id');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});


app.get('/Q49', async(req, res)=>{
    try{
        const result = await pool.query('SELECT job_history.*, employees.first_name, employees.last_name, jobs.job_title, locations.city FROM job_history JOIN employees ON job_history.employee_id = employees.employee_id JOIN jobs ON job_history.job_id = jobs.job_id JOIN departments ON job_history.department_id = departments.department_id JOIN locations ON departments.location_id = locations.location_id');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});


app.get('/Q50', async(req, res)=>{
    try{
        const result = await pool.query('select jh.*, e.first_name, e.last_name, j.job_title, c.country_name from job_history as jh inner join employees as e on jh.employee_id = e.employee_id inner join jobs as j on jh.job_id = j.job_id inner join departments as d on jh.department_id = d.department_id inner join locations as l on d.location_id = l.location_id inner join countries as c on l.country_id = c.country_id');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});


app.get('/Q51', async(req, res)=>{
    try{
        const result = await pool.query('SELECT regions.region_name, countries.country_name, locations.city FROM regions JOIN countries ON regions.region_id = countries.region_id JOIN locations ON countries.country_id = locations.country_id');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});


app.get('/Q52', async(req, res)=>{
    try{
        const result = await pool.query('SELECT countries.country_name, regions.region_name, locations.city FROM countries JOIN regions ON countries.region_id = regions.region_id JOIN locations ON countries.country_id = locations.country_id');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});





app.get('/Q53', async(req, res)=>{
    try{
        const result = await pool.query('SELECT locations.city, countries.country_name, regions.region_name FROM locations JOIN countries ON locations.country_id = countries.country_id JOIN regions ON countries.region_id = regions.region_id');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});


app.get('/Q54', async(req, res)=>{
    try{
        const result = await pool.query('SELECT departments.department_name, employees.first_name, employees.last_name, locations.city FROM departments JOIN employees ON departments.department_id = employees.department_id JOIN locations ON departments.location_id = locations.location_id');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/Q55', async(req, res)=>{
    try{
        const result = await pool.query('SELECT employees.first_name, employees.last_name, departments.department_name, locations.city, countries.country_name FROM employees JOIN departments ON employees.department_id = departments.department_id JOIN locations ON departments.location_id = locations.location_id JOIN countries ON locations.country_id = countries.country_id');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/Q56', async(req, res)=>{
    try{
        const result = await pool.query('SELECT e1.first_name AS employee_first_name, e1.last_name AS employee_last_name, e2.first_name AS manager_first_name, e2.last_name AS manager_last_name, departments.department_name, locations.city FROM employees e1 LEFT JOIN employees e2 ON e1.manager_id = e2.employee_id JOIN departments ON e1.department_id = departments.department_id JOIN locations ON departments.location_id = locations.location_id');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/Q57', async(req, res)=>{
    try{
        const result = await pool.query('SELECT employees.first_name, employees.last_name, jobs.job_title, departments.department_name, locations.city FROM employees JOIN jobs ON employees.job_id = jobs.job_id JOIN departments ON employees.department_id = departments.department_id JOIN locations ON departments.location_id = locations.location_id');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/Q58', async(req, res)=>{
    try{
        const result = await pool.query('SELECT employees.first_name, employees.last_name, jobs.job_title, departments.department_name, managers.first_name AS manager_first_name, managers.last_name AS manager_last_name FROM employees JOIN jobs ON employees.job_id = jobs.job_id JOIN departments ON employees.department_id = departments.department_id LEFT JOIN employees managers ON employees.manager_id = managers.employee_id;');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/Q59', async(req, res)=>{
    try{
        const result = await pool.query('SELECT employees.first_name, employees.last_name, jobs.job_title, departments.department_name, managers.first_name AS manager_first_name, managers.last_name AS manager_last_name, locations.city FROM employees JOIN jobs ON employees.job_id = jobs.job_id JOIN departments ON employees.department_id = departments.department_id LEFT JOIN employees managers ON employees.manager_id = managers.employee_id JOIN locations ON departments.location_id = locations.location_id');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/Q60', async(req, res)=>{
    try{
        const result = await pool.query('select  region_name from regions where  region_id = 1');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});


app.get('/Q61', async(req, res)=>{
    try{
        const result = await pool.query(`select * from  countries where country_name like 'N%'`);
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/Q62', async(req, res)=>{
    try{
        const result = await pool.query(`SELECT e.*
          FROM employees e
          WHERE e.department_id IN (
            SELECT d.department_id
            FROM departments d
            JOIN employees m ON d.manager_id = m.employee_id
            WHERE m.commission_pct > 0.15)`);
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/Q63', async(req, res)=>{
    try{
        const result = await pool.query(`select  job_title from jobs
        where  lower(job_title) like '%manager%'`);
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});


app.get('/Q64', async(req, res)=>{
    try{
        const result = await pool.query(`select postal_code from locations
 where country_id in (select country_id from countries where region_id = (select region_id from regions where region_name='Asia'))`);
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/Q65', async(req, res)=>{
    try{
        const result = await pool.query(`select department_name from departments
where commission_pct in (select commission_pct from employees where commission_pct < (select avg(commission_pct) from employees))`);
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});


app.get('/Q66', async(req, res)=>{
    try{
        const result = await pool.query(`select  job_title from jobs
  where  job_id in (select  job_id from employees where salary > (select avg(salary) from employees))`);
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/Q67', async(req, res)=>{
    try{
        const result = await pool.query(`select employee_id from employees
 where department_id in (select department_id from departments where department_name = null)`);
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});


app.get('/Q68', async(req, res)=>{
    try{
        const result = await pool.query(`SELECT employees.first_name, employees.last_name
FROM employees
JOIN job_history ON employees.employee_id = job_history.employee_id
GROUP BY employees.employee_id
HAVING COUNT(DISTINCT job_history.job_id) > 1`);
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/Q69', async(req, res)=>{
    try{
        const result = await pool.query(`SELECT department_id, COUNT(employee_id) AS employee_count
FROM employees
GROUP BY department_id`);
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});


app.get('/Q70', async(req, res)=>{
    try{
        const result = await pool.query(`SELECT jobs.job_title, SUM(employees.salary) AS total_salary
FROM employees
JOIN jobs ON employees.job_id = jobs.job_id
GROUP BY jobs.job_title`);
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/Q71', async(req, res)=>{
    try{
        const result = await pool.query(`SELECT departments.department_name, AVG(employees.commission_pct) AS avg_commission_pct
FROM employees
JOIN departments ON employees.department_id = departments.department_id
GROUP BY departments.department_name`);
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});



app.get('/Q72', async(req, res)=>{
    try{
        const result = await pool.query(`SELECT countries.country_name, MAX(employees.salary) AS max_salary
FROM employees
JOIN departments ON employees.department_id = departments.department_id
JOIN locations ON departments.location_id = locations.location_id
JOIN countries ON locations.country_id = countries.country_id
GROUP BY countries.country_name`);
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/Q73', async(req, res)=>{
    try{
        const result = await pool.query(`SELECT 
employees.first_name, 
employees.last_name, 
departments.department_name, 
locations.city, 
locations.state_province

FROM employees
JOIN departments ON employees.department_id = departments.department_id
JOIN locations ON departments.location_id = locations.location_id
WHERE employees.first_name LIKE '%z%'`);
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});


app.get('/Q74', async(req, res)=>{
    try{
        const result = await pool.query(`SELECT c.country_name, l.city, COUNT(d.department_id) AS dept_count
          FROM departments d
          JOIN employees e ON d.department_id = e.department_id
          JOIN locations l ON d.location_id = l.location_id
          JOIN countries c ON l.country_id = c.country_id
          GROUP BY c.country_name, l.city
          HAVING COUNT(e.employee_id) >= 2`);
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/Q75', async(req, res)=>{
    try{
        const result = await pool.query(`SELECT e.first_name, e.last_name, j.job_title, jh.start_date, jh.end_date
          FROM employees e
          JOIN job_history jh ON e.employee_id = jh.employee_id
          JOIN jobs j ON jh.job_id = j.job_id
          WHERE e.commission_pct IS NULL`);
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});


app.get('/Q76', async(req, res)=>{
    try{
        const result = await pool.query(` SELECT e.employee_id, e.first_name, e.last_name, c.country_name
          FROM employees e
          JOIN departments d ON e.department_id = d.department_id
          JOIN locations l ON d.location_id = l.location_id
          JOIN countries c ON l.country_id = c.country_id`);
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/Q77', async(req, res)=>{
    try{
        const result = await pool.query(`select first_name,last_name,salary,department_id from employees where salary = (select min(salary) from employees)`);
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});


app.get('/Q78', async(req, res)=>{
    try{
        const result = await pool.query(`SELECT *
FROM employees e
WHERE 2 = (
  SELECT COUNT(DISTINCT salary)
  FROM employees
  WHERE salary > e.salary`);
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});

app.get('/Q79', async(req, res)=>{
    try{
        const result = await pool.query(`select employee_id,first_name, last_name,salary from employees
neondb-> where salary > (select avg(salary) from employees) and (lower(first_name) like '%j%' or lower(last_name) like '%j%')`);
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});


app.get('/Q80', async(req, res)=>{
    try{
        const result = await pool.query(`SELECT e.first_name, e.last_name, e.employee_id, j.job_title
          FROM employees e
          JOIN jobs j ON e.job_id = j.job_id
          JOIN departments d ON e.department_id = d.department_id
          JOIN locations l ON d.location_id = l.location_id
          WHERE l.city = 'Toronto'`);
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message});
    }
});



const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Connected successful........on PORT ${PORT}`);
});