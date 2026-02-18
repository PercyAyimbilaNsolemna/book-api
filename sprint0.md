<div align="center">

# Sprint 0 Documentation

## Book RESTful API (NestJS + MongoDB)

---

*Backend service for efficient digital book collection management*

</div>

---

## Table of Contents

- [Product Vision](#1-product-vision)
- [Product Backlog](#2-product-backlog)
- [Backlog Refinement](#3-backlog-refinement)
- [Definition of Done](#4-definition-of-done-dod)
- [Sprint 1 Plan](#5-sprint-1-plan)

---

## 1. Product Vision

**Product Vision:**

The Book RESTful API is a backend service that enables users to efficiently manage a digital collection of books by creating, retrieving, updating, and deleting book records through secure and scalable API endpoints.

---

## 2. Product Backlog

<table>
<tr>
<th width="20%">Story</th>
<th width="80%">User Story</th>
</tr>
<tr>
<td><strong>Story 1</strong><br>Create Book</td>
<td>As a user, I want to add a new book so that I can store book information in the system.</td>
</tr>
<tr>
<td><strong>Story 2</strong><br>View All Books</td>
<td>As a user, I want to retrieve all books so that I can see the available book collection.</td>
</tr>
<tr>
<td><strong>Story 3</strong><br>View Single Book</td>
<td>As a user, I want to retrieve a specific book so that I can view its details.</td>
</tr>
<tr>
<td><strong>Story 4</strong><br>Update Book</td>
<td>As a user, I want to update book information so that records remain accurate.</td>
</tr>
<tr>
<td><strong>Story 5</strong><br>Delete Book</td>
<td>As a user, I want to remove a book so that outdated entries are cleared.</td>
</tr>
<tr>
<td><strong>Story 6</strong><br>Health Check Endpoint</td>
<td>As a system administrator, I want a health endpoint so that I can verify the API is running.</td>
</tr>
</table>

---

## 3. Backlog Refinement

---

### Story 1 — Create Book

<table>
<tr>
<th width="30%">Attribute</th>
<th width="70%">Details</th>
</tr>
<tr>
<td><strong>Acceptance Criteria</strong></td>
<td>
• POST request accepts title, author, and year<br>
• Book is saved in MongoDB<br>
• API returns created book<br>
• Validation error shown if fields are missing
</td>
</tr>
<tr>
<td><strong>Priority</strong></td>
<td>High</td>
</tr>
<tr>
<td><strong>Story Points</strong></td>
<td>3</td>
</tr>
</table>

---

### Story 2 — View All Books

<table>
<tr>
<th width="30%">Attribute</th>
<th width="70%">Details</th>
</tr>
<tr>
<td><strong>Acceptance Criteria</strong></td>
<td>
• GET request returns all books<br>
• Empty list returned if none exist<br>
• Response status is 200
</td>
</tr>
<tr>
<td><strong>Priority</strong></td>
<td>High</td>
</tr>
<tr>
<td><strong>Story Points</strong></td>
<td>2</td>
</tr>
</table>

---

### Story 3 — View Single Book

<table>
<tr>
<th width="30%">Attribute</th>
<th width="70%">Details</th>
</tr>
<tr>
<td><strong>Acceptance Criteria</strong></td>
<td>
• GET request with ID returns a book<br>
• Error returned if book does not exist<br>
• Proper HTTP status codes used
</td>
</tr>
<tr>
<td><strong>Priority</strong></td>
<td>Medium</td>
</tr>
<tr>
<td><strong>Story Points</strong></td>
<td>2</td>
</tr>
</table>

---

### Story 4 — Update Book

<table>
<tr>
<th width="30%">Attribute</th>
<th width="70%">Details</th>
</tr>
<tr>
<td><strong>Acceptance Criteria</strong></td>
<td>
• PUT/PATCH request updates book fields<br>
• Updated record returned<br>
• Validation applied<br>
• Error if book not found
</td>
</tr>
<tr>
<td><strong>Priority</strong></td>
<td>Medium</td>
</tr>
<tr>
<td><strong>Story Points</strong></td>
<td>3</td>
</tr>
</table>

---

### Story 5 — Delete Book

<table>
<tr>
<th width="30%">Attribute</th>
<th width="70%">Details</th>
</tr>
<tr>
<td><strong>Acceptance Criteria</strong></td>
<td>
• DELETE request removes a book<br>
• Success message returned<br>
• Error if book does not exist
</td>
</tr>
<tr>
<td><strong>Priority</strong></td>
<td>Medium</td>
</tr>
<tr>
<td><strong>Story Points</strong></td>
<td>2</td>
</tr>
</table>

---

### Story 6 — Health Check Endpoint

<table>
<tr>
<th width="30%">Attribute</th>
<th width="70%">Details</th>
</tr>
<tr>
<td><strong>Acceptance Criteria</strong></td>
<td>
• <code>/health</code> endpoint exists<br>
• Returns API status message<br>
• Returns HTTP 200 when service is healthy
</td>
</tr>
<tr>
<td><strong>Priority</strong></td>
<td>Low</td>
</tr>
<tr>
<td><strong>Story Points</strong></td>
<td>1</td>
</tr>
</table>

---

## 4. Definition of Done (DoD)

A backlog item is considered **Done** when all the following conditions are met:

---

### Functionality

<table>
<tr>
<td width="33%">

Feature meets acceptance criteria

</td>
<td width="33%">

Correct HTTP status codes returned

</td>
<td width="33%">

No runtime errors during normal use

</td>
</tr>
</table>

---

### Code Quality

<table>
<tr>
<td width="33%">

Code follows NestJS structure

</td>
<td width="33%">

No unused variables or major linting issues

</td>
<td width="33%">

Code is readable and maintainable

</td>
</tr>
</table>

---

### Version Control

<table>
<tr>
<td width="50%">

Changes committed with meaningful messages

</td>
<td width="50%">

Code pushed to remote repository

</td>
</tr>
</table>

---

### Testing

<table>
<tr>
<td width="50%">

Unit or integration tests written

</td>
<td width="50%">

All tests pass successfully

</td>
</tr>
</table>

---

### CI Pipeline

<table>
<tr>
<td width="50%">

CI pipeline runs successfully

</td>
<td width="50%">

Build and tests complete without failure

</td>
</tr>
</table>

---

### Documentation

<table>
<tr>
<td width="50%">

Endpoint behavior documented

</td>
<td width="50%">

Assumptions or changes recorded

</td>
</tr>
</table>

---

### Review Readiness

<table>
<tr>
<td>

Feature is deployable and demonstrable

</td>
</tr>
</table>

---

## 5. Sprint 1 Plan

### Sprint Goal

Deliver the foundational version of the Book API by implementing core book creation and retrieval functionality, while establishing version control practices, automated testing, and a basic CI pipeline.

---

### Selected Stories

<table>
<tr>
<th width="10%">No.</th>
<th width="60%">Story</th>
<th width="30%">Story Points</th>
</tr>
<tr>
<td>1</td>
<td>Create Book</td>
<td>3 Story Points</td>
</tr>
<tr>
<td>2</td>
<td>View All Books</td>
<td>2 Story Points</td>
</tr>
<tr>
<td>3</td>
<td>View Single Book</td>
<td>2 Story Points</td>
</tr>
<tr>
<td colspan="2"><strong>Total Effort</strong></td>
<td><strong>7 Story Points</strong></td>
</tr>
</table>

---

### Expected Deliverables

<table>
<tr>
<th width="50%">Category</th>
<th width="50%">Deliverable</th>
</tr>
<tr>
<td><strong>Working API endpoints</strong></td>
<td>
• POST /books<br>
• GET /books<br>
• GET /books/:id
</td>
</tr>
<tr>
<td><strong>Version Control</strong></td>
<td>
Git commit history demonstrating incremental development
</td>
</tr>
<tr>
<td><strong>Testing</strong></td>
<td>
Automated tests integrated
</td>
</tr>
<tr>
<td><strong>CI/CD</strong></td>
<td>
Basic CI pipeline configured
</td>
</tr>
</table>

---

<div align="center">


</div>