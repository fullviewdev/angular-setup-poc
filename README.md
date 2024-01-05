# Angular-Fullview Setup POC

This project demonstrates how to integrate the Fullview script with a regular Angular app.

Two mandatory methods MUST be used in order to correctly integrate.
These methods can be found in the `fullview.service.ts` file.

1. `injectFullviewScript()`
- This method should be called as early as possible in the application lifecycle, as it injects the Fullview script into your app.

2. `syncUserData()`
- This method should be called whenever your user data changes. This includes the moment the user logs in or logs out.

- For the purpose of this POC, the user data is maintained in a simple BehaviorSubject called `$user` that can be found in the `auth.service.ts` file. In a real-life application the state of your authenticated users might be handled in a totally different way.

To turn on the Fullview logs in your dev environment just add `fvDebug: true` in the `localStorage` of your app. These might help you better understand what's happening behind the scenes.
