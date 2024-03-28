<!-- markdownlint-configure-file {
  "MD013": {
    "code_blocks": false,
    "tables": false
  },
  "MD033": false,
  "MD041": false
} -->

<div align="center">

# Todo-real-time

todo-real-time is a **realtime & offline-first**, todo mobile app for android and iOS built using react-native & firebase.

It syncs data in real-time across multiple devices, so you can "jump" between devices
without worrying about syncing.<br />

Syncing is enabled through gRPC remote procedure calls and bi-directional streaming over the database connection under the hood

todo-fire is made with high availability and high consistency, It's made possible to achieve both through the underlying Spanner DB [see paper...][spanner-paper]

todo-fire has authentication built-in through the Firebase email-password method.

</div>

## Functional Requirements

1. Displays a list of tasks
2. Includes a form or input field where users can add a new task to the list
3. Each task has a title, due_at(optional), note(optional) and status (completed or not)
4. Users should be able to mark tasks as completed or uncompleted by tapping on them
5. Users should be able to delete tasks from the list

## Non-Functional Requirements

1. Highly Available - Available both online and offline (reads and writes are both supported through Firestore db)
2. Highly Consistent - When online, this is achieved by real-time syncing eliminating eventual consistency
3. Fault Tolerant - Writes are appended to Firestore's commit log on disk and are not lost if the app crashes or the device runs out of power

## Installation

todo-fire can be installed as follows:

1. **Development Environment Setup**

   You will require your environment set for mobile development(skip if already done),
   please [setup instructions][react-native-env].

2. **Install, Build, Run**

   To start using todo-fire and build it locally:

   Run the following command to install the app and link dependencies from the root directory

   ```shell
   > npm install
   > npm run postinstall
   ```

   ```shell
   > npm run ios
   ```

   For Android: populate `sdk.dir` and `cmake.dir` in /android/local.properties (create a file) to contain the Android SDK path

   ```
   sdk.dir=/Users/{UserName}/Library/Android/sdk
   cmake.dir=/Users/{UserName}/Library/Android/Sdk/cmake/3.18.1
   ```

   ```shell
   > npm run android
   ```

## Tech Stack

| Packages                | Description                                 |
| ----------------------- | ------------------------------------------- |
| [react-native]          | Cross-Platform native framework             |
| [expo]                  | react-native supporting framework ecosystem |
| [react-navigation]      | Native routing & navigation                 |
| [react-native-paper]    | Cross-Platform Material Design framework.   |
| [react-native-firebase] | Firebase impl for using auth & firestore    |
| [valtio]                | Proxy based State Management                |
| [typescript]            | Adding type-safety to vanilla JS            |

[react-native-paper]: https://github.com/callstack/react-native-paper
[react-native]: https://github.com/facebook/react-native
[react-navigation]: https://github.com/react-navigation/react-navigation
[expo]: https://github.com/expo/expo
[react-native-firebase]: https://github.com/invertase/react-native-firebase
[valtio]: https://github.com/pmndrs/valtio
[typescript]: https://github.com/microsoft/TypeScript
[react-native-env]: https://reactnative.dev/docs/environment-setup?guide=native
[spanner-paper]: https://research.google/pubs/firestore-the-nosql-serverless-database-for-the-application-developer/
