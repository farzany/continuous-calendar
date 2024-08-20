
# React Continuous Calendar

Continuous Calendar is a bare-bones calendar built with React and Tailwindcss. It does not include event creation and display, as that's left up to your discretion.

### So what does it do? ✨

- Displays 12 months at once, with respect to the specified year.
- Allows for quick-navigation to specific months and Today.
- Clicking on a cell triggers the onClick event with (day, month, year).
- Responsive; supports mobile, tablet, and desktop views.


### Installation 💻

There is no npm package, it's just 1 file you can customize. Simply download or copy the file:

`/components/ContinuousCalendar.tsx`.

Additionally, I have applied the following global css:

```
*:focus:not(ol) {
  @apply outline-none ring-2 ring-cyan-400 border-cyan-400;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  text-indent: 1px;
  text-overflow: '';
}
```

### Contribution 🔮

If you wish to contribute to this project, clone the repo and run it locally using `npm run dev`.


## Screenshots

![App Screenshot](https://i.postimg.cc/7qtz4srV/Screenshot-2024-08-19-at-10-28-57-PM.png)

![App Screenshot](https://i.postimg.cc/Q843fyB2/Screenshot-2024-08-19-at-10-36-31-PM.png)

## Inspiration

![App Screenshot](https://i.postimg.cc/qk1gyQGF/Screenshot-2024-08-19-at-10-45-56-PM.png)

