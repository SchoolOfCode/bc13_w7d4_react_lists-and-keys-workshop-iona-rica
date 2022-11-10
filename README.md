# Lists and Keys Workshop

## Task 1

In the `<Main/>` component (src/components/Main), use the map() method to loop over the the 'posts' state. For each post in the array, return a `<Post/>` component.

## Task 2

Set the `key` prop for each `<Post/>` component as the `postId` property contained within the post object.

## Task 3

Hand down each property of the post as props to the `<Post/>` component - to check the properties, head over to src/libs/data

## Task 4

In the `<Post/>` component (src/components/Post) receive the post properties that you have handed down as props - be conscious of the syntax here, and look at the docs if you are unsure: https://reactjs.org/docs/components-and-props.html.

## Task 5

Use the information to build the `<Post/>` component using HTML elements in JSX. Choose the most semantic html tag for each property that makes up the post. Leave the `highlights` and `image` property to last.

Run `npm start` in your console to test whether your code is displaying correctly. You should see three posts for the price of one! Your map() method and `<Post/>` component are working together to generate a post for each item in the `posts` state.

For the `highlights` property of the post object, use the map() method again to generate an `<li>` element for each item in the array. For each `<li>` element, set the key to be the index of the item in the `highlights` array.

The `image` property of the post object is itself an object - how can you use this knowledge to populate an img tag with both a `src` and `alt` attribute?

## Task 6

Add a new post to the `samplePosts` array in src/libs/data. It should seamlessly appear on the page underneath the original posts.

## Task 7 - Bonus

Edit the components (Footer, Header, Main, Post) and their respective css files to make Ben's pigeon blog the best on the web!
