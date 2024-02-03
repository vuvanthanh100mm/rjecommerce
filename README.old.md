# rjecommerce

Step 1 Setup\
https://www.youtube.com/watch?v=-ERWlp828kY\
node -v\
npm install -g npm@10.4.0\
npx create-react-app rjecommerce --use-npm\
Step 2 Setup redux\ https://redux-toolkit.js.org/tutorials/quick-start\
2.1 Webpack là một công cụ xây dựng (build tool) phổ biến trong việc quản lý và tổ chức mã nguồn JavaScript và các tài nguyên khác của ứng dụng web. Nó giúp tổ chức mã nguồn, tối ưu hóa và đóng gói các tệp tài nguyên như JavaScript, CSS, hình ảnh và các tệp khác thành các tệp tối ưu hóa và tối tiết kiệm dung lượng. Dưới đây là một số ứng dụng chính của Webpack:\
-Gộp các tệp mã nguồn: Webpack cho phép bạn gộp nhiều tệp JavaScript hoặc tài nguyên khác thành một hoặc một số tệp duy nhất. Điều này giúp giảm số lượng yêu cầu mạng và tăng hiệu suất tải trang của ứng dụng web.\
-Xử lý các tệp tài nguyên khác nhau: Ngoài JavaScript, Webpack cũng có thể xử lý các loại tài nguyên khác như CSS, hình ảnh, font chữ, và nhiều loại tệp khác. Bạn có thể sử dụng các loaders để biến đổi và tích hợp chúng vào quy trình xây dựng của bạn.\
-Quản lý phụ thuộc: Webpack cho phép bạn quản lý các phụ thuộc của dự án một cách tự động và hiệu quả. Bằng cách sử dụng các gói npm hoặc yarn, bạn có thể dễ dàng cài đặt và quản lý các thư viện phụ thuộc của dự án của mình.\
-Tối ưu hóa mã nguồn: Webpack cung cấp các plugin và công cụ để tối ưu hóa mã nguồn của bạn, bao gồm loại bỏ mã không sử dụng, nén mã và các tối ưu hóa khác để giảm kích thước và tăng hiệu suất của ứng dụng.\
-Hỗ trợ môi trường phát triển và sản xuất: Webpack cho phép bạn cấu hình các quy trình xây dựng riêng biệt cho môi trường phát triển và sản xuất. Điều này giúp tối ưu hóa và quản lý các tài nguyên của bạn một cách linh hoạt, đồng thời cung cấp môi trường làm việc tốt nhất cho từng giai đoạn của dự án.\
npm install webpack webpack-cli --save-dev\
2.2 Thư viện web-vitals là một công cụ giúp đo lường và theo dõi hiệu suất của trang web. Nó cung cấp các hàm để đo lường các chỉ số hiệu suất quan trọng như TTFB (Time to First Byte), FID (First Input Delay), LCP (Largest Contentful Paint), FCP (First Contentful Paint), và CLS (Cumulative Layout Shift).\
npm install web-vitals\
2.3 Ant Design (AntD) là một thư viện giao diện người dùng (UI) phổ biến dành cho React, được xây dựng bởi Ant Group. AntD cung cấp một bộ công cụ giao diện đồng nhất và thẩm mỹ cho việc phát triển ứng dụng web. Dưới đây là một số điểm mạnh và các ứng dụng của Ant Design:\
-Giao diện người dùng đồng nhất: Ant Design cung cấp các thành phần giao diện đã được thiết kế sẵn, giúp đảm bảo giao diện của ứng dụng của bạn có vẻ đồng nhất và chuyên nghiệp.\
-Tích hợp dễ dàng: Ant Design được thiết kế để tích hợp một cách dễ dàng vào các ứng dụng React. Bạn có thể sử dụng các thành phần của AntD như Button, Input, Form, Modal và nhiều thành phần khác chỉ bằng cách nhập chúng vào mã nguồn của ứng dụng của bạn.\
-Đa dạng và mạnh mẽ: Ant Design cung cấp một loạt các thành phần giao diện, từ các thành phần cơ bản như Buttons và Inputs đến các thành phần phức tạp như Tables và Charts, giúp bạn xây dựng các giao diện phức tạp một cách dễ dàng.\
-Responsive Design: Các thành phần của Ant Design được thiết kế để đáp ứng các kích thước màn hình khác nhau, giúp ứng dụng của bạn có thể hoạt động một cách tốt trên cả máy tính và thiết bị di động.\
-Hỗ trợ đa ngôn ngữ: Ant Design cung cấp hỗ trợ cho nhiều ngôn ngữ khác nhau, giúp bạn xây dựng ứng dụng đa ngôn ngữ một cách dễ dàng.\
npm install antd\
2.4 Redux là một thư viện JavaScript phổ biến được sử dụng trong các ứng dụng web và ứng dụng đa nền tảng để quản lý trạng thái ứng dụng. Redux giúp bạn quản lý trạng thái của ứng dụng một cách dễ dàng và có tổ chức, đặc biệt là trong các ứng dụng lớn và phức tạp. Một số ứng dụng của Redux bao gồm:\
-Quản lý trạng thái toàn cục: Redux giúp bạn quản lý trạng thái của ứng dụng một cách có tổ chức và dễ bảo trì.\
-Quản lý dữ liệu giao tiếp với máy chủ: Bằng cách sử dụng Redux, bạn có thể quản lý việc gọi API và cập nhật dữ liệu từ máy chủ một cách hiệu quả.\
-Debugging dễ dàng: Redux cung cấp công cụ mạnh mẽ cho việc debug như Redux DevTools, giúp bạn dễ dàng theo dõi và phân tích thay đổi trong trạng thái ứng dụng.\
-Tích hợp với các thư viện và framework khác: Redux có thể tích hợp dễ dàng với nhiều thư viện và framework khác, không chỉ giới hạn trong ngữ cảnh của React.\
npm install @reduxjs/toolkit \
2.5 React-Redux là một thư viện JavaScript giúp kết nối Redux với React một cách dễ dàng và hiệu quả. Redux là một thư viện quản lý trạng thái cho ứng dụng JavaScript, trong khi React là một thư viện giao diện người dùng (UI) phổ biến. React-Redux giúp bạn tích hợp Redux vào ứng dụng React của mình một cách linh hoạt và tiện lợi.
npm install react-redux
2.6 Styled-components là một thư viện CSS-in-JS cho React, cho phép bạn viết CSS trong JavaScript một cách linh hoạt và hiệu quả. Thay vì sử dụng tệp CSS riêng biệt, styled-components cho phép bạn tạo các thành phần React với CSS được nhúng trực tiếp vào mã JavaScript.
npm install styled-components