<div align="center">

# Sprint 1 Review

## Book RESTful API (NestJS)

---

*Delivering functional API endpoints with DevOps automation and testing*

</div>

---

## Table of Contents

- [Sprint Overview](#1-sprint-overview)
- [Features Delivered](#2-features-delivered)
- [Technical Implementation](#3-technical-implementation)
- [Version Control Evidence](#4-version-control-evidence)
- [CI/CD Pipeline](#5-cicd-pipeline)
- [Testing Implementation](#6-testing-implementation)
- [Demonstration Evidence](#7-demonstration-evidence)
- [Sprint Outcome](#8-sprint-outcome)
- [Sprint 1 Retrospective](#9-sprint-1-retrospective)
- [Next Steps](#10-next-steps-sprint-2)

---

## 1. Sprint Overview

<table>
<tr>
<th width="30%">Attribute</th>
<th width="70%">Details</th>
</tr>
<tr>
<td><strong>Sprint Goal</strong></td>
<td>Deliver the first working increment of the Book RESTful API while establishing a DevOps workflow including version control, automated testing, and CI pipeline integration.</td>
</tr>
<tr>
<td><strong>Sprint Duration</strong></td>
<td>Sprint 1</td>
</tr>
</table>

---

## 2. Features Delivered

During this sprint, the following backlog items were completed:

---

### Create Book

<table>
<tr>
<th width="30%">Attribute</th>
<th width="70%">Details</th>
</tr>
<tr>
<td><strong>Endpoint</strong></td>
<td><code>POST /books</code></td>
</tr>
<tr>
<td><strong>Functionality</strong></td>
<td>
• Allows users to add a new book to the database<br>
• Prevents duplicate book titles
</td>
</tr>
</table>

**Example Request Body**

```json
{
  "bookName": "Atomic Habits",
  "bookCategory": "Self Development",
  "bookPrice": 60,
  "bookDescription": "A book about building good habits"
}
```

---

### Get All Books

<table>
<tr>
<th width="30%">Attribute</th>
<th width="70%">Details</th>
</tr>
<tr>
<td><strong>Endpoint</strong></td>
<td><code>GET /books</code></td>
</tr>
<tr>
<td><strong>Functionality</strong></td>
<td>
• Returns all books currently in stock<br>
• Filters books where <code>availableQuantity > 0</code>
</td>
</tr>
</table>

---

### Get Book By ID

<table>
<tr>
<th width="30%">Attribute</th>
<th width="70%">Details</th>
</tr>
<tr>
<td><strong>Endpoint</strong></td>
<td><code>GET /books/:bookID</code></td>
</tr>
<tr>
<td><strong>Functionality</strong></td>
<td>
• Retrieves a single book using its MongoDB ID
</td>
</tr>
</table>

---

## 3. Technical Implementation

### Backend Stack

<table>
<tr>
<th width="30%">Technology</th>
<th width="70%">Purpose</th>
</tr>
<tr>
<td><strong>NestJS</strong></td>
<td>Node.js framework</td>
</tr>
<tr>
<td><strong>MongoDB</strong></td>
<td>Local installation</td>
</tr>
<tr>
<td><strong>Mongoose ODM</strong></td>
<td>Object Data Modeling</td>
</tr>
</table>

---

### Architecture

<table>
<tr>
<th width="30%">Layer</th>
<th width="70%">Responsibility</th>
</tr>
<tr>
<td><strong>Controller Layer</strong></td>
<td>Handles HTTP requests</td>
</tr>
<tr>
<td><strong>Service Layer</strong></td>
<td>Business logic</td>
</tr>
<tr>
<td><strong>MongoDB Schema</strong></td>
<td>Data persistence</td>
</tr>
</table>

---

## 4. Version Control Evidence

Git was used following incremental development practices:

<table>
<tr>
<td width="33%">

Feature branches created per functionality

</td>
<td width="33%">

Small, meaningful commits

</td>
<td width="33%">

Pull requests merged into main branch

</td>
</tr>
</table>

**Repository Link:**

```
(Insert GitHub repository URL here)
```

---

## 5. CI/CD Pipeline

A GitHub Actions CI pipeline was implemented.

### Pipeline Steps

<table>
<tr>
<th>Step</th>
<th>Action</th>
</tr>
<tr>
<td>1</td>
<td>Install dependencies</td>
</tr>
<tr>
<td>2</td>
<td>Build application</td>
</tr>
<tr>
<td>3</td>
<td>Run automated tests</td>
</tr>
</table>

**Pipeline Configuration File**

```
.github/workflows/main.yml
```

**Evidence**

<table>
<tr>
<td width="50%">

Successful pipeline runs

</td>
<td width="50%">

Failed runs detected and fixed during development

</td>
</tr>
</table>

```
(Insert screenshot of successful GitHub Actions run)
```

---

## 6. Testing Implementation

### Unit Tests Added

<table>
<tr>
<td width="50%">

Books Service tests

</td>
<td width="50%">

Books Controller tests

</td>
</tr>
</table>

---

### What Was Tested

<table>
<tr>
<th width="50%">Test Category</th>
<th width="50%">Coverage</th>
</tr>
<tr>
<td><strong>Book Creation</strong></td>
<td>Book creation logic</td>
</tr>
<tr>
<td><strong>Validation</strong></td>
<td>Duplicate book prevention</td>
</tr>
<tr>
<td><strong>Retrieval</strong></td>
<td>
• Fetching all books<br>
• Fetching a book by ID
</td>
</tr>
</table>

**Test Results**

All test suites passing locally and in CI pipeline.

```
(Insert screenshot of passing tests)
```

---

## 7. Demonstration Evidence

Provide screenshots showing:

<table>
<tr>
<th>Evidence Type</th>
<th>Description</th>
</tr>
<tr>
<td><strong>Postman Requests</strong></td>
<td>
• Request creating a book<br>
• Fetching all books<br>
• Fetching book by ID
</td>
</tr>
<tr>
<td><strong>CI Pipeline</strong></td>
<td>Pipeline success</td>
</tr>
</table>

```
(Insert screenshots here)
```

---

## 8. Sprint Outcome

Sprint 1 successfully delivered a functional backend API with automated testing and continuous integration. The project now follows Agile and DevOps best practices with incremental delivery and automated validation.

---

## 9. Sprint 1 Retrospective

### What Went Well

<table>
<tr>
<td width="33%">

Feature branching improved organization

</td>
<td width="33%">

CI pipeline helped detect issues early

</td>
<td width="33%">

Unit testing increased confidence in code changes

</td>
</tr>
</table>

---

### What Could Be Improved (For Sprint 2)

<table>
<tr>
<th>Priority</th>
<th>Improvement</th>
</tr>
<tr>
<td>1</td>
<td>Add request validation using DTO validation pipes</td>
</tr>
<tr>
<td>2</td>
<td>Improve logging and error handling for better debugging</td>
</tr>
<tr>
<td>3</td>
<td>Introduce monitoring/health checks</td>
</tr>
</table>

---

## 10. Next Steps (Sprint 2)

<table>
<tr>
<th width="50%">Category</th>
<th width="50%">Action</th>
</tr>
<tr>
<td><strong>Feature Development</strong></td>
<td>Implement additional API features</td>
</tr>
<tr>
<td><strong>Operations</strong></td>
<td>Add monitoring and logging</td>
</tr>
<tr>
<td><strong>Process Improvement</strong></td>
<td>Apply retrospective improvements</td>
</tr>
<tr>
<td><strong>Delivery</strong></td>
<td>Deliver second working increment</td>
</tr>
</table>

---

<div align="center">

*Sprint 1 Review — Book RESTful API*

**NestJS • MongoDB • GitHub Actions • Agile Development**

</div>