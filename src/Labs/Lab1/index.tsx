// default content when running

export default function Lab1() {
    return (
        <div id="wd-lab1">
            <h2>Lab 1</h2>
            <h3>HTML Examples</h3>
            <div id="wd-h-tag">
                <h4>Heading Tags</h4>

                {/* Paragraphs */}
                <p id="wd-p-1">
                    {/* browser ignore the white space btw paragraph */}
                    Text documents are often broken up into several sections and subsections.
                    Each section is usually prefaced with a short title or heading that attempts
                    to summarize the topic of the section it precedes.
                    For instance this paragraph is preceded by the heading Heading Tags.
                    The font of the section headings are usually larger and bolder than their
                    subsection headings. This document uses headings to introduce topics such as
                    HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used
                    to format plain text so that it renders in a browser as large headings.
                    There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6.
                    Tag h1 is the largest heading and h6 is the smallest heading.
                </p>

                <p id="wd-p-2">
                    This is the first paragraph. The paragraph tag is used to format
                    vertical gaps between long pieces of text like this one.
                </p>
                <p id="wd-p-3">
                    This is the second paragraph. Even though there is a deliberate white
                    gap between the paragraph above and this paragraph, by default
                    browsers render them as one contiguous piece of text as shown here on
                    the right.
                </p>
                <p id="wd-p-4">
                    This is the third paragraph. Wrap each paragraph with the paragraph
                    tag to tell browsers to render the gaps.
                </p>

            </div>

            {/* Lists and Tables， OL 是ordered list 由1，2，3表示， UL是unordered list， 由点表示 */}
            <div id="wd-lists">
                <h4>List Tags</h4>
                <h5>Ordered List Tag </h5>
                How to make pancakes:
                <ol id="wd-pancakes">
                    <li>Mix dry ingredients.</li>
                    <li>Add wet ingredients.</li>
                    <li>Stir to combine.</li>
                    <li>Heat a skillet or griddle.</li>
                    <li>Pour batter onto the skillet.</li>
                    <li>Cook until bubbly on top.</li>
                    <li>Flip and cook the other side.</li>
                    <li>Serve and enjoy!</li>
                </ol>

                <h5>Unordered List Tag</h5>
                My favorite books (in no particular order)
                <ul id="wd-my-books">
                    <li>Dune</li>
                    <li>Lord of the Rings</li>
                    <li>Ender's Game</li>
                    <li>Red Mars</li>
                    <li>The Forever War</li>
                </ul>
                Your favorite books (in no particular order)
                <ul id="wd-your-books">
                    <li>Invisible Cities</li>
                    <li>If on a Winter's Night a Traveller</li>
                    <li>Journey Under the Midnight Sun</li>
                    <li>Six Memos for the Next Millennium</li>
                    <li>The Three-Body Problem</li>
                </ul>
            </div>


            {/* Table */}
            <div id="wd-tables">
                <h4>Table Tag</h4>
                <table border={1} width="100%">
                    {" "}
                    {/* table, border, width */}
                    <thead>
                        {" "}
                        {/* table headings */}
                        <tr>
                            {" "}
                            {/* table row */}
                            <th>Quiz</th> {/* table heading*/}
                            <th>Topic</th>
                            <th>Date</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {" "}
                        {/* table body */}
                        <tr>
                            {" "}
                            {/* table row */}
                            <td>Q1</td> {/* table data / cell */}
                            <td>HTML</td>
                            <td>2/3/21</td>
                            <td>85</td>
                        </tr>
                        <tr>
                            <td>Q2</td>
                            <td>CSS</td>
                            <td>2/10/21</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Q3</td>
                            <td>JavaScript</td>
                            <td>2/17/21</td>
                            <td>95</td>
                        </tr>
                        <tr>
                            {" "}
                            {/* table row */}
                            <td>Q4</td> {/* table data / cell */}
                            <td>Python</td>
                            <td>2/24/21</td>
                            <td>85</td>
                        </tr>
                        <tr>
                            {" "}
                            {/* table row */}
                            <td>Q5</td> {/* table data / cell */}
                            <td>Database</td>
                            <td>3/3/21</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Q6</td>
                            <td>Computer Systems</td>
                            <td>3/10/21</td>
                            <td>95</td>
                        </tr>
                        <tr>
                            <td>Q7</td>
                            <td>Data Structures</td>
                            <td>3/17/21</td>
                            <td>88</td>
                        </tr>
                        <tr>
                            <td>Q8</td>
                            <td>Algorithms</td>
                            <td>3/24/21</td>
                            <td>92</td>
                        </tr>
                        <tr>
                            <td>Q9</td>
                            <td>Networks</td>
                            <td>3/31/21</td>
                            <td>87</td>
                        </tr>
                        <tr>
                            <td>Q10</td>
                            <td>Operating Systems</td>
                            <td>4/7/21</td>
                            <td>93</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        {" "}
                        {/* table row */}
                        <tr>
                            <td colSpan={3}>Average</td> {/* column span */}
                            <td>90</td>
                        </tr>
                    </tfoot>
                </table>
            </div>


            <div id="wd-images">
                <h4>Image tag</h4>
                Loading an image from the internet:
                <br />
                <img
                    id="wd-starship"
                    width="400px"
                    src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
                />
                <br />
                Loading a local image:
                <br />
                <img id="wd-teslabot" src="public/images/teslabot.jpg" height="200px" />
            </div>

            {/* Forms */}
            <div id="wd-forms">
                <h4>Form Elements</h4>
                <form id="wd-text-fields">
                    <h5>Text Fields</h5>
                    <label htmlFor="wd-text-fields-username">Username:</label>
                    <input id="wd-text-fields-username" placeholder="graywoo" />
                    <br />

                    <label htmlFor="wd-text-fields-password">Password:</label>
                    <input
                        type="password"
                        id="wd-text-fields-password"
                        value="123@#$asd"
                    />
                    <br />

                    <label htmlFor="wd-text-fields-first-name">First name:</label>
                    <input type="text" id="wd-text-fields-first-name" title="John" />
                    <br />

                    <label htmlFor="wd-text-fields-last-name">Last name:</label>
                    <input
                        type="text"
                        id="wd-text-fields-last-name"
                        placeholder="Doe"
                        value="Wonderland"
                        title="The last name"
                    />
                    <br />

                    {/* copy rest of form elements here  */}
                    <label htmlFor="wd-text-fields-email">Email:</label>
                    <input
                        type="email"
                        id="wd-text-fields=email"
                        placeholder="jdoe@example.com"
                    />
                    <br />

                    <label htmlFor="wd-text-fields-phone">Phone number:</label>
                    <input
                        type="tel"
                        id="wd-text-fields-phone"
                        placeholder="123-456-7890"
                    />
                </form>
            </div>

            {/* Buttons */}
            <button type="button"> Delete</button> <br />
            <button type="button"> Edit</button> <br />
            <button type="submit"> Update</button> <br />

            {/* On Click Event Handler 点击这个button的时候会干什么 */}
            <h5 id="wd-buttons"> Click Buttons will trigger alert</h5>
            <button id="wd-all-good"
                onClick={() => alert("Life is Good!")}
                type="button">
                Hello World!
            </button>


            {/* Radio Buttons */}
            <h5 id="wd-radio-buttons">Radio buttons</h5>
            <label>Favorite movie genre:</label><br />
            {/* 这里会显示圆形选择， 只能单选， 得添加一个相同的name，这样他们才知道是一个group， 就不会多选*/}
            <input type="radio" name="radio-genre" id="wd-radio-comedy" />
            <label htmlFor="wd-radio-comedy">Comedy</label><br />

            {/* 这里使用htmlFor 的用途是：和 id 相匹配， 当用户点击对应的 label 时，浏览器会自动将焦点聚焦到对应的button上。 */}

            <input type="radio" name="radio-genre" id="wd-radio-drama" />
            <label htmlFor="wd-radio-drama">Drama</label><br />

            <input type="radio" name="radio-genre" id="wd-radio-scifi" />
            <label htmlFor="wd-radio-scifi">Science Fiction</label><br />

            <input type="radio" name="radio-genre" id="wd-radio-fantasy" />
            <label htmlFor="wd-radio-fantasy">Fantasy</label>

            {/* Check Box, 方框选项: 可以多选  */}
            <h5 id="wd-checkboxes">Checkboxes</h5>
            <label>Favorite movie genre:</label><br />

            <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
            <label htmlFor="wd-chkbox-comedy">Comedy</label><br />

            <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
            <label htmlFor="wd-chkbox-drama">Drama</label><br />

            <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
            <label htmlFor="wd-chkbox-scifi">Science Fiction</label><br />

            <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
            <label htmlFor="wd-chkbox-fantasy">Fantasy</label>

            {/* Dropdown 下拉菜单 */}
            <h5>DropDown tables</h5>
            <select name="role">
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
                <option value="ADMIN">Admin</option>
            </select>
        </div>);
}