# Our GitHub Workflow

We are documenting our process to organize and prioritize our work using GitHub's tools.

## Projects and Milestones

Our code is organized into [projects](https://github.com/unlock-protocol/unlock/projects) which are roughly mapped by directories inside our mono-repo. Projects do not have end dates but they have [milestones](https://github.com/unlock-protocol/unlock/milestones), which are ways to determine progress on our goals. The milestones are units \(and sub-units\) of our [roadmap](../governance/roadmap).

We use 2 weeks sprints to work on "Epics". A Epic is a group of related tasks, such as "User Accounts" or "Integration Tests". The Epics are defined based on user stories for the milestone. A cycle is a set of 3 consecutive 2 weeks sprints. The first 2 sprints are dedicated to implementing features toward a release, while the 3rd sprint is dedicated to backlogs and scheduling \(post-mortem for the cycle and planification of the next cycle\).

The epics are made of [issues](https://github.com/unlock-protocol/unlock/issues). These are atomic units of work that need to be completed, and may be bugs or new features \(or subsets of new features\).

## Labels and Priorities

We also use [labels](https://github.com/unlock-protocol/unlock/labels) as a way to classify tasks and issues using other dimensions. For example, we use P-0, 1, 2, 3 to identify the priority of a given task of issue.

- [P-0](https://github.com/unlock-protocol/unlock/issues?q=is%3Aissue+is%3Aopen+label%3Ap-0): Blocking bugs that we should drop everything to fix.
- [P-1](https://github.com/unlock-protocol/unlock/issues?q=is%3Aissue+is%3Aopen+label%3Ap-1): Bugs that must be fixed before the next release.
- [P-2](https://github.com/unlock-protocol/unlock/issues?q=is%3Aissue+is%3Aopen+label%3Ap-2): Bugs that should be fixed before the next release, time and resources permitting.
- [P-3](https://github.com/unlock-protocol/unlock/issues?q=is%3Aissue+is%3Aopen+label%3Ap-3): Bugs that should be fixed when there's time.

We reach milestones by solving issues based on their priority.

## Task Status

Inside each project, we use kanban boards to identify the state of each task/issue, from "todo" to "done". This allows everyone on the team, and in the community, to easily see which work is in progress.

## Submitting Pull Requests

Each code change is submitted as a pull request \(see [contributions](https://github.com/unlock-protocol/unlock/wiki/Getting-Started)\).

## The Road to Production

Unlock has multiple projects ongoing whose release cycles are decoupled because they show different characteristics.

### The web applications \(front ends!\)

We use the traditional web-dev approach to release early and often. This allows for quick iterations and fast progress. Once reviewed and approved, any change is merged into our master branch and immediately \(minutes\) deployed to our staging environment \(smart contracts changes currently need to be manually deployed to rinkeby\). Each commit in the `master` branch should be expected to be deployed in production and should hence be "production-grade".

We also maintain a production branch which is used to deployed to ... production! This branch is also protected and the only way to add commits to it is to go thru a regular pull request process. Right now, there is an automated system which generates a pull request every Tuesday at 4:30pm ET from the state of master 4 days before \(Friday at 4:30pm\). This pull request has to be approved and manually merged by one of our team members. Once approved and merge the various production web applications are immediately updated.

If needed, we can also deploy specific versions to production. For this is recommended approach is to open a new pull request against the production branch containing **only** the commits to be deployed since the latest production deploy. One way to do this is to rebase a local production-fix branch against the remote production branch and cherry pick the commits to be deployed from master. After this is a pull request is made and has to be approved by some of our team members. Once approved the updated production branch is immediately deployed.

Deployments for fixes:

- Fix for a p-0 bug: deployed ASAP, including all previously commits
- Fix for p-1 bug: deployed in the next business day, including all previously commits
- Fix for p-2 and p3: deployed as part of our "regular" deployment schedule.

### The server applications \(back ends!\)

Locksmith and Wedlocks do not currently have a staging environment and every merge to master is deployed on their production infrastructures.

### The smart contracts \(blockchain\)

Smart contracts are on a slow release cycle. We set a goal to deploy them once per cycle \(6 weeks\). Since each version may introduce breaking tests, their deployment process is slightly more complicated. Once a "stable" version has been reached \(key features fully implemented and usable\), we publish the ABI as an npm module. For example, [here is our v0 ABI](https://www.npmjs.com/package/unlock-abi-0). Note: we publish a **new** npm module everytime, we do not update the past one because the web application needs to be able to run against multiple ABI at the same time.

The next step is to add this new ABI npm package to all of the other \(web and server if applicable\) apps and ensure that they all run with _both_ the old ABI and the new ABI \(the smart contract including versioning to make feature detection easier if needed\). Fixes are made to the applications if required.

Once all apps are compatible with the new and old ABIs, they are deployed. We then proceed to updating the rinkeby deployed smart contracts for the staging environment. At that point, we should run an acceptance test suite \(TBD\). If everything works as expected, we can safely upgrade the main net smart contracts.

Once everything has been upgraded, we can start removing support for the old ABI from the multiple applications.
