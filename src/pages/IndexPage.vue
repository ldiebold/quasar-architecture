<script setup>

</script>

<template>
  <q-page
    padding
    class="text-grey-9"
  >
    You Can Build Anything...

    <h2 class="q-my-md">
      Model
    </h2>
    <li>If a new model is needed, create it first</li>
    <li>usually we'll build all our models first. So if a model is built on your backend your next move should be to add it to the frontend</li>

    <h2 class="q-my-md">
      Router
    </h2>
    <li>Create the page</li>
    <li>Decide if any dynamic params are required</li>
    <li>Send params down as props</li>

    <h2 class="q-my-md">
      Page
    </h2>
    <li>Check page recieved props</li>
    <li>This is likely <strong>very barebones</strong></li>
    <li>DOES NOT make requests</li>
    <li>Sends props down to view</li>

    <h2 class="q-my-md">
      View
    </h2>
    <li>Check recieved props from the page</li>
    <li>Now is a good time to setup sample data</li>
    <li>All request/global state management happens here</li>
    <li>In complex cases, views may display other views</li>

    <h2 class="q-my-md">
      Components
    </h2>
    <li>Check recieved data from view</li>
    <li>NEVER make requests</li>
    <li>NEVER change global state</li>
    <li>Three responsibilities</li>
    <li><strong>props</strong>: display props passed from parent</li>
    <li><strong>emit</strong>: notify the parent of any changes</li>
    <li><strong>expose</strong>: in rare cases - like dialogs `hide`/`show` - expose methods on the component</li>
  </q-page>
</template>
