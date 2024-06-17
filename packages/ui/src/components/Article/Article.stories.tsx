import type { Meta, StoryObj } from '@storybook/react';

import { Article } from './Article';

const meta = {
  component: Article,
} satisfies Meta<typeof Article>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Article {...args}>
      <h1>Lorem Ipsum Dolor Sit Amet</h1>
      <h2>Consectetur Adipiscing Elit</h2>
      <h3>Sed Do Eiusmod Tempor</h3>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla tincidunt ligula libero, a fermentum risus ultricies ac. Maecenas non ligula nec leo hendrerit vehicula ac id libero. Integer ac risus in sem lacinia rhoncus. Donec in erat nec quam tristique tristique. Duis in orci non elit dapibus commodo ac sit amet mauris. Fusce vel dui augue. Proin et metus ac nisi laoreet scelerisque. Integer a massa dolor. Suspendisse potenti. Nullam interdum metus nisi, et scelerisque nulla dignissim ac.</p>


      <ul>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
      </ul>

      <ol>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit</li>
        <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
      </ol>

      <blockquote>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</blockquote>

      <blockquote>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </blockquote>

      <p><code>&lt;Lorem ipsum&gt;</code></p>

      <pre><code>
        {`function loremIpsum() {
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
}`}
      </code></pre>
      <table>
        <thead>
          <tr>
            <th>Heading 1</th>
            <th>Heading 2</th>
            <th>Heading 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1 Col 1</td>
            <td>Row 1 Col 2</td>
            <td>Row 1 Col 3</td>
          </tr>
          <tr>
            <td>Row 2 Col 1</td>
            <td>Row 2 Col 2</td>
            <td>Row 2 Col 3</td>
          </tr>
          <tr>
            <td>Row 3 Col 1</td>
            <td>Row 3 Col 2</td>
            <td>Row 3 Col 3</td>
          </tr>
        </tbody>
      </table>

      <p><img src="https://via.placeholder.com/150" alt="Lorem Ipsum Image" /></p>

      <p><a href="https://www.lipsum.com">Lorem Ipsum</a></p>

      <p><a href="https://www.lipsum.com">Lorem Ipsum</a></p>

      <hr />

      <ul>
        <li><input type="checkbox" /> Lorem ipsum dolor sit amet</li>
        <li><input type="checkbox" checked /> Consectetur adipiscing elit</li>
        <li><input type="checkbox" /> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
      </ul>
    </Article>
  ),
};
