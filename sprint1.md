# Sprint 1 Documentation --- Book RESTful API (NestJS + MongoDB)

## Sprint Goal

Deliver the first working increment of the Book API while establishing
core DevOps practices including version control, CI/CD, and automated
testing.

------------------------------------------------------------------------

## Sprint Objectives

### 1. Deliver Working Software

Complete and deliver at least **two backlog items** planned during
Sprint 0.

Planned backlog items: - Create Book (`POST /books`) - Get All Books
(`GET /books`) - Get Book By ID (`GET /books/:id`)

Success Criteria: - Endpoints work correctly. - Data persists in
MongoDB. - API responses follow RESTful standards.

------------------------------------------------------------------------

### 2. Use Version Control (Git)

The repository must show **iterative and incremental development**.

Requirements: - Each feature developed in its own branch. - Small,
meaningful commits. - No single "big-bang" commit.

Recommended commit prefixes: - feat: new feature - fix: bug fix - chore:
setup/config - test: tests added - docs: documentation updates

------------------------------------------------------------------------

### 3. Set Up CI/CD Pipeline

Implement a basic Continuous Integration pipeline using GitHub Actions.

Pipeline should: - Install dependencies - Build the NestJS project - Run
tests automatically on push or pull request

Expected file:

    .github/workflows/main.yml

------------------------------------------------------------------------

### 4. Implement Testing

Add automated tests that run inside the CI pipeline.

Testing scope: - Unit tests for services OR - Integration tests for
endpoints

Success Criteria: - Tests execute successfully in CI. - Failed tests
should fail the pipeline.

------------------------------------------------------------------------

### 5. Sprint Review

Produce evidence showing what was delivered.

Examples: - Screenshots of working endpoints (Postman) - API responses -
Short written demo explaining features completed

Artifacts: - Screenshots - Demo write‑up - Repository link

------------------------------------------------------------------------

### 6. Sprint Retrospective

Write a reflection identifying **at least two improvements** for Sprint
2.

Reflection should cover: - What went well - What challenges occurred -
What will be improved next sprint

Example Improvements: - Improve commit consistency - Add validation
earlier - Improve testing coverage

------------------------------------------------------------------------

## Expected Deliverables at End of Sprint 1

-   Working Book API (minimum two features)
-   Clean Git commit history
-   CI pipeline configuration
-   Automated tests
-   Sprint Review documentation
-   Sprint Retrospective reflection

------------------------------------------------------------------------

## Definition of Sprint 1 Success

Sprint 1 is successful when: - Working software is delivered -
Development process follows Agile practices - DevOps automation is
established - Evidence exists for review and assessment
