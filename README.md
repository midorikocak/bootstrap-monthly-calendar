## Monthly Calendar for Twitter Bootstrap
Monthly calendar By Midori Kocak mtkocak@gmail.com. Inspired by http://bootsnipp.com/snipps/better-one-month-calendar

This calendar creates a calendar on a selected div. Twitter Bootstrap library is required.

---

### Usage

Copy jquery.bootcalendar.js file to you js folder. And then add the script to your page after bootstrap script is initialized.

        <script src="js/jquery.bootcalendar.js"></script>
        
To run the calendar, you can start by adding .calendar() to your selected div tag.

    <script>
    $('#calendar').calendar();
    </script>

There is two methods for change months. You can increase month by calling:

    $('#calendar').calendar('next');
    
And you can decrease month by calling:

    $('#calendar').calendar('prev');
    
However this feature is not tested yet.

---

### License

GNU GENERAL PUBLIC LICENSE

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF THIRD PARTY RIGHTS. IN
NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
OR OTHER DEALINGS IN THE SOFTWARE.

---
