<div align="center">

# Sprint 2 Documentation

## Book API Project

---

*Delivering enhanced CRUD operations with comprehensive testing and monitoring*

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features Delivered](#1-features-delivered)
- [CI/CD Integration](#2-cicd-integration)
- [Testing Summary](#3-testing-summary)
- [Retrospective / Process Improvements](#4-retrospective--process-improvements)
- [Sprint Review](#5-sprint-review)
- [Next Steps](#6-next-steps)

---

## Overview

The goal of Sprint 2 was to apply feedback from Sprint 1, deliver the next increment of the Book API, and implement improvements including update and delete operations, full unit tests, and basic monitoring/logging.

---

## 1. Features Delivered

---

### 1.1 Update Book

<table>
<tr>
<th width="20%">Layer</th>
<th width="40%">Component</th>
<th width="40%">Details</th>
</tr>
<tr>
<td><strong>Service</strong></td>
<td><code>BooksService.updateBook(bookID, updateBookDto)</code></td>
<td>
• Checks if the book exists in the database<br>
• Throws <code>NotFoundException</code> if the book does not exist<br>
• Updates the book and returns the updated document
</td>
</tr>
<tr>
<td><strong>Controller</strong></td>
<td><code>BooksController.updateBook(id, updateBookDto)</code></td>
<td>
• Receives the request and calls the service
</td>
</tr>
<tr>
<td><strong>DTO</strong></td>
<td><code>UpdateBookDto</code></td>
<td>
Extends <code>PartialType(CreateBookDto)</code> for partial updates
</td>
</tr>
<tr>
<td><strong>Validation</strong></td>
<td>Input validation</td>
<td>
• Ensures <code>bookID</code> is valid<br>
• Update data follows schema rules
</td>
</tr>
</table>

---

### 1.2 Delete Book

<table>
<tr>
<th width="20%">Layer</th>
<th width="40%">Component</th>
<th width="40%">Details</th>
</tr>
<tr>
<td><strong>Service</strong></td>
<td><code>BooksService.deleteBook(id)</code></td>
<td>
• Checks if the book exists<br>
• Throws <code>NotFoundException</code> if the book does not exist<br>
• Deletes the book and returns the deleted document
</td>
</tr>
<tr>
<td><strong>Controller</strong></td>
<td><code>BooksController.deleteBook(id)</code></td>
<td>
• Receives the request and calls the service
</td>
</tr>
<tr>
<td><strong>Improvements</strong></td>
<td>Enhanced validation</td>
<td>
• Optional logging<br>
• Validation for MongoDB ObjectId
</td>
</tr>
</table>

---

### 1.3 Unit Testing

**Service unit tests added for:**

<table>
<tr>
<td width="50%">

• <code>createBook</code><br>
• <code>findAllBooks</code><br>
• <code>findBookById</code>

</td>
<td width="50%">

• <code>updateBook</code><br>
• <code>deleteBook</code>

</td>
</tr>
</table>

**Controller unit tests added for:**

<table>
<tr>
<td width="50%">

• <code>createBook</code><br>
• <code>findAllBooks</code><br>
• <code>findBookById</code>

</td>
<td width="50%">

• <code>updateBook</code><br>
• <code>deleteBook</code>

</td>
</tr>
</table>

**Test Coverage:**

Ensures proper handling of success, not found, and validation errors.

---

### 1.4 Monitoring / Logging

<table>
<tr>
<th width="30%">Implementation</th>
<th width="70%">Details</th>
</tr>
<tr>
<td><strong>Current State</strong></td>
<td>
• Added basic console logs in services for key operations (optional enhancement)<br>
• Logs track important service operations
</td>
</tr>
<tr>
<td><strong>Extension Options</strong></td>
<td>
Can be extended using:
<ul>
<li>NestJS Logger</li>
<li>Winston</li>
<li>External monitoring tools</li>
</ul>
</td>
</tr>
</table>

---

## 2. CI/CD Integration

GitHub Actions pipeline configured to:

<table>
<tr>
<td width="50%">

• Run all tests on each push and pull request<br>
• Ensure no broken builds or regressions

</td>
<td width="50%">

**Branch Strategy:**

• Separate feature branch per operation (create, read, update, delete)<br>
• Merge incremental changes to main branch with successful test runs

</td>
</tr>
</table>

---

## 3. Testing Summary

<table>
<tr>
<th width="30%">Feature</th>
<th width="40%">Unit Tests</th>
<th width="30%">Status</th>
</tr>
<tr>
<td>Create Book</td>
<td>Service & Controller</td>
<td>Passed</td>
</tr>
<tr>
<td>Get All Books</td>
<td>Service & Controller</td>
<td>Passed</td>
</tr>
<tr>
<td>Get Book by ID</td>
<td>Service & Controller</td>
<td>Passed</td>
</tr>
<tr>
<td>Update Book</td>
<td>Service & Controller</td>
<td>Passed</td>
</tr>
<tr>
<td>Delete Book</td>
<td>Service & Controller</td>
<td>Passed</td>
</tr>
</table>

**Test Quality:**

<table>
<tr>
<td width="50%">

All tests pass successfully

</td>
<td width="50%">

Tests cover both happy path and error handling scenarios

</td>
</tr>
</table>

---

## 4. Retrospective / Process Improvements

<table>
<tr>
<th width="5%">No.</th>
<th width="30%">Improvement Area</th>
<th width="65%">Details</th>
</tr>
<tr>
<td>1</td>
<td><strong>Unit Test Coverage</strong></td>
<td>Added tests for all CRUD operations to ensure reliability</td>
</tr>
<tr>
<td>2</td>
<td><strong>Error Handling & Validation</strong></td>
<td>
• Validated ObjectId for update and delete operations<br>
• Proper exceptions (<code>NotFoundException</code>, <code>BadRequestException</code>) added
</td>
</tr>
<tr>
<td>3</td>
<td><strong>Logging / Monitoring</strong></td>
<td>
• Basic logging added for important service operations<br>
• Can be extended for real-time monitoring in production
</td>
</tr>
<tr>
<td>4</td>
<td><strong>Branching & Git Workflow</strong></td>
<td>Feature branches for each operation improved code management and review process</td>
</tr>
<tr>
<td>5</td>
<td><strong>CI/CD</strong></td>
<td>Continuous testing ensures code quality and avoids regressions</td>
</tr>
</table>

---

## 5. Sprint Review

API endpoints tested using Postman:

<table>
<tr>
<th width="30%">HTTP Method</th>
<th width="35%">Endpoint</th>
<th width="35%">Operation</th>
</tr>
<tr>
<td>POST</td>
<td><code>/books</code></td>
<td>Create book</td>
</tr>
<tr>
<td>GET</td>
<td><code>/books</code></td>
<td>Get all books</td>
</tr>
<tr>
<td>GET</td>
<td><code>/books/:id</code></td>
<td>Get book by ID</td>
</tr>
<tr>
<td>PATCH</td>
<td><code>/books/:id</code></td>
<td>Update book</td>
</tr>
<tr>
<td>DELETE</td>
<td><code>/books/:id</code></td>
<td>Delete book</td>
</tr>
</table>

**Evidence:**

Screenshots, logs, and CI/CD pipeline results can be included in submission.

---

## 6. Next Steps

<table>
<tr>
<th width="5%">No.</th>
<th width="95%">Planned Action</th>
</tr>
<tr>
<td>1</td>
<td>Implement authentication and authorization (JWT + Admin Guard)</td>
</tr>
<tr>
<td>2</td>
<td>Add more robust monitoring and error reporting (e.g., Sentry, Winston)</td>
</tr>
<tr>
<td>3</td>
<td>Prepare final project submission including all Sprint 0, Sprint 1, and Sprint 2 artifacts</td>
</tr>
</table>

---

<div align="center">

*Sprint 2 Documentation — Book API Project*

**NestJS • MongoDB • Unit Testing • CI/CD • Monitoring**

</div>