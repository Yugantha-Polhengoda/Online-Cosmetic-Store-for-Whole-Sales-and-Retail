import React from "react";

const HomeDiscription = () => {
  return (
    <div class="card text-bg-dark">
      <img style={{ opacity: 0.3 }} src="/images/wp15.jpg" alt="" />
      <div style={{ color: "#d9e3f1" }} class="card-img-overlay">
        <h2 class="mb-3 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          We invest in the world’s potential
        </h2>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>

        <div>
          <ul role="list" class="space-y-4 text-gray-500 dark:text-gray-400">
            <li class="flex space-x-2">
              <span class="leading-tight">Dynamic reports and dashboards</span>
            </li>
            <li class="flex space-x-2">
              <span class="leading-tight">Templates for everyone</span>
            </li>
            <li class="flex space-x-2">
              <span class="leading-tight">Development workflow</span>
            </li>
            <li class="flex space-x-2">
              <span class="leading-tight">Limitless business automation</span>
            </li>
          </ul>
        </div>

        <dl class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
          <div class="flex flex-col">
            <dt class="mb-2 text-3xl font-extrabold">73M+</dt>
            <dd class="text-gray-500 dark:text-gray-400">Developers</dd>
          </div>
          <div class="flex flex-col">
            <dt class="mb-2 text-3xl font-extrabold">100M+</dt>
            <dd class="text-gray-500 dark:text-gray-400">
              Public repositories
            </dd>
          </div>
          <div class="flex flex-col">
            <dt class="mb-2 text-3xl font-extrabold">1000s</dt>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default HomeDiscription;
