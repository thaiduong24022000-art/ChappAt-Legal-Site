// Cloudflare Worker để phục vụ SaiGon Match Legal Site
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;
    console.log("hihi");
    // Mapping các routes tới nội dung update lại nè
    const routes = {
      '/': indexHTML,
      '/index.html': indexHTML,
      '/terms.html': termsHTML,
      '/privacy.html': privacyHTML,
      '/delete-account.html': deleteAccountHTML,
      '/child-safety.html': childSafetyHTML,
      '/style.css': styleCSS,
      '/app-ads.txt': appAdsTxt
    };

    // Xử lý route
    if (routes[path]) {
      const contentType = getContentType(path);
      return new Response(routes[path], {
        headers: {
          'Content-Type': contentType,
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'public, max-age=3600'
        }
      });
    }

    // 404 cho các route không tìm thấy
    return new Response('Not Found', { status: 404 });
  }
};

function getContentType(path) {
  if (path.endsWith('.html') || path === '/') return 'text/html; charset=utf-8';
  if (path.endsWith('.css')) return 'text/css; charset=utf-8';
  if (path.endsWith('.txt')) return 'text/plain; charset=utf-8';
  return 'text/plain';
}

// ============= CONTENT =============

const appAdsTxt = `google.com, pub-9793421534392971, DIRECT, f08c47fec0942fa0
`;

const styleCSS = `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    line-height: 1.6;
    color: #333;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    padding: 20px;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

h1 {
    color: #667eea;
    margin-bottom: 30px;
    font-size: 2.5em;
    text-align: center;
}

h2 {
    color: #764ba2;
    margin-top: 30px;
    margin-bottom: 15px;
    font-size: 1.8em;
}

p {
    margin-bottom: 15px;
    text-align: justify;
}

ul {
    margin-left: 30px;
    margin-bottom: 15px;
}

li {
    margin-bottom: 10px;
}

.back-link {
    display: inline-block;
    margin-top: 30px;
    color: #667eea;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
}

.back-link:hover {
    color: #764ba2;
}

.nav-links {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 30px;
    justify-content: center;
}

.nav-links a {
    padding: 15px 30px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    text-decoration: none;
    border-radius: 10px;
    font-weight: bold;
    transition: transform 0.3s, box-shadow 0.3s;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.nav-links a:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
}

@media (max-width: 768px) {
    .container {
        padding: 20px;
    }
    
    h1 {
        font-size: 2em;
    }
    
    h2 {
        font-size: 1.5em;
    }
}`;

const indexHTML = `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SaiGon Match - Legal Information</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>🎯 SaiGon Match</h1>
        <p style="text-align: center; font-size: 1.2em; color: #666;">
            Kết nối ý nghĩa, xây dựng mối quan hệ bền vững tại Sài Gòn
        </p>
        
        <div class="nav-links">
            <a href="terms.html">📋 Điều khoản sử dụng</a>
            <a href="privacy.html">🔒 Chính sách bảo mật</a>
            <a href="child-safety.html">👶 An toàn trẻ em</a>
            <a href="delete-account.html">🗑️ Xóa tài khoản</a>
        </div>
        
        <h2>Về SaiGon Match</h2>
        <p>
            SaiGon Match là ứng dụng kết nối người dùng tại TP. Hồ Chí Minh, 
            giúp bạn tìm kiếm và xây dựng các mối quan hệ ý nghĩa.
        </p>
        
        <h2>Liên hệ</h2>
        <p>
            Email: support@saigonmatch.com<br>
            Địa chỉ: TP. Hồ Chí Minh, Việt Nam
        </p>
    </div>
</body>
</html>`;

const termsHTML = `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Điều khoản sử dụng - SaiGon Match</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>📋 Điều khoản sử dụng</h1>
        
        <h2>1. Chấp nhận điều khoản</h2>
        <p>
            Bằng việc truy cập và sử dụng ứng dụng SaiGon Match, bạn đồng ý tuân thủ 
            và bị ràng buộc bởi các điều khoản và điều kiện sử dụng sau đây.
        </p>
        
        <h2>2. Điều kiện sử dụng</h2>
        <ul>
            <li>Bạn phải từ 18 tuổi trở lên để sử dụng dịch vụ này</li>
            <li>Thông tin bạn cung cấp phải chính xác và trung thực</li>
            <li>Bạn chịu trách nhiệm duy trì tính bảo mật của tài khoản</li>
            <li>Nghiêm cấm các hành vi lừa đảo, quấy rối hoặc spam</li>
        </ul>
        
        <h2>3. Quyền riêng tư</h2>
        <p>
            Chúng tôi cam kết bảo vệ quyền riêng tư của bạn. Vui lòng xem 
            <a href="privacy.html">Chính sách bảo mật</a> để biết thêm chi tiết.
        </p>
        
        <h2>4. Chấm dứt dịch vụ</h2>
        <p>
            Chúng tôi có quyền chấm dứt hoặc đình chỉ tài khoản của bạn nếu phát hiện 
            vi phạm các điều khoản này.
        </p>
        
        <h2>5. Thay đổi điều khoản</h2>
        <p>
            Chúng tôi có quyền cập nhật các điều khoản này bất cứ lúc nào. 
            Việc tiếp tục sử dụng dịch vụ sau khi có thay đổi đồng nghĩa với việc 
            bạn chấp nhận các điều khoản mới.
        </p>
        
        <p style="margin-top: 30px; font-style: italic;">
            Cập nhật lần cuối: 06/10/2026
        </p>
        
        <a href="index.html" class="back-link">← Quay lại trang chủ</a>
    </div>
</body>
</html>`;

const privacyHTML = `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chính sách bảo mật - SaiGon Match</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>🔒 Chính sách bảo mật</h1>
        
        <h2>1. Thu thập thông tin</h2>
        <p>Chúng tôi thu thập các thông tin sau:</p>
        <ul>
            <li>Thông tin cá nhân: tên, tuổi, giới tính, ảnh đại diện</li>
            <li>Thông tin liên hệ: email, số điện thoại (nếu có)</li>
            <li>Thông tin vị trí: để hiển thị khoảng cách với người dùng khác</li>
            <li>Thông tin sử dụng: tương tác với ứng dụng</li>
        </ul>
        
        <h2>2. Sử dụng thông tin</h2>
        <p>Thông tin của bạn được sử dụng để:</p>
        <ul>
            <li>Cung cấp và cải thiện dịch vụ</li>
            <li>Kết nối bạn với người dùng khác</li>
            <li>Gửi thông báo về hoạt động tài khoản</li>
            <li>Phân tích và cải thiện trải nghiệm người dùng</li>
        </ul>
        
        <h2>3. Chia sẻ thông tin</h2>
        <p>
            Chúng tôi không bán hoặc cho thuê thông tin cá nhân của bạn. 
            Thông tin chỉ được chia sẻ với người dùng khác theo cài đặt 
            quyền riêng tư của bạn.
        </p>
        
        <h2>4. Bảo mật</h2>
        <p>
            Chúng tôi sử dụng các biện pháp bảo mật tiêu chuẩn ngành để 
            bảo vệ thông tin của bạn khỏi truy cập trái phép.
        </p>
        
        <h2>5. Quyền của bạn</h2>
        <p>Bạn có quyền:</p>
        <ul>
            <li>Truy cập và cập nhật thông tin cá nhân</li>
            <li>Xóa tài khoản và dữ liệu của bạn</li>
            <li>Từ chối nhận thông báo marketing</li>
            <li>Yêu cầu sao kê dữ liệu cá nhân</li>
        </ul>
        
        <h2>6. Liên hệ</h2>
        <p>
            Nếu có câu hỏi về chính sách bảo mật, vui lòng liên hệ: 
            <a href="mailto:privacy@saigonmatch.com">privacy@saigonmatch.com</a>
        </p>
        
        <p style="margin-top: 30px; font-style: italic;">
            Cập nhật lần cuối: 06/10/2026
        </p>
        
        <a href="index.html" class="back-link">← Quay lại trang chủ</a>
    </div>
</body>
</html>`;

const deleteAccountHTML = `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Xóa tài khoản - SaiGon Match</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>🗑️ Xóa tài khoản</h1>
        
        <h2>Cách xóa tài khoản của bạn</h2>
        <p>
            Nếu bạn muốn xóa tài khoản SaiGon Match, vui lòng làm theo các bước sau:
        </p>
        
        <ol style="margin-left: 30px; margin-bottom: 20px;">
            <li>Mở ứng dụng SaiGon Match</li>
            <li>Vào <strong>Cài đặt</strong> (biểu tượng bánh răng)</li>
            <li>Cuộn xuống và chọn <strong>"Xóa tài khoản"</strong></li>
            <li>Xác nhận quyết định của bạn</li>
        </ol>
        
        <h2>⚠️ Lưu ý quan trọng</h2>
        <ul>
            <li>Việc xóa tài khoản là <strong>vĩnh viễn</strong> và không thể hoàn tác</li>
            <li>Tất cả dữ liệu cá nhân, tin nhắn và kết nối sẽ bị xóa</li>
            <li>Bạn sẽ không thể khôi phục tài khoản sau khi xóa</li>
            <li>Quá trình xóa có thể mất 24-48 giờ để hoàn tất</li>
        </ul>
        
        <h2>📧 Cần hỗ trợ?</h2>
        <p>
            Nếu bạn gặp vấn đề khi xóa tài khoản hoặc có câu hỏi, 
            vui lòng liên hệ với chúng tôi:
        </p>
        <p>
            Email: <a href="mailto:support@saigonmatch.com">support@saigonmatch.com</a><br>
            Chúng tôi sẽ phản hồi trong vòng 24 giờ.
        </p>
        
        <h2>Thay vì xóa tài khoản</h2>
        <p>
            Nếu bạn chỉ muốn tạm thời không sử dụng ứng dụng, bạn có thể:
        </p>
        <ul>
            <li>Tắt thông báo trong phần Cài đặt</li>
            <li>Ẩn hồ sơ của bạn tạm thời</li>
            <li>Đăng xuất khỏi ứng dụng</li>
        </ul>
        
        <a href="index.html" class="back-link">← Quay lại trang chủ</a>
    </div>
</body>
</html>`;

const childSafetyHTML = `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chính sách an toàn trẻ em - SaiGon Match</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>👶 Chính sách an toàn trẻ em</h1>
        
        <h2>Cam kết của chúng tôi</h2>
        <p>
            SaiGon Match cam kết bảo vệ trẻ em khỏi mọi hình thức lạm dụng, 
            quấy rối và nội dung không phù hợp. Chúng tôi thực hiện các biện pháp 
            nghiêm ngặt để đảm bảo nền tảng an toàn.
        </p>
        
        <h2>🚫 Giới hạn độ tuổi</h2>
        <ul>
            <li>Ứng dụng <strong>chỉ dành cho người từ 18 tuổi trở lên</strong></li>
            <li>Chúng tôi nghiêm cấm người dưới 18 tuổi tạo tài khoản</li>
            <li>Tài khoản vi phạm sẽ bị xóa ngay lập tức</li>
        </ul>
        
        <h2>🛡️ Biện pháp bảo vệ</h2>
        <ul>
            <li><strong>Xác minh tuổi:</strong> Yêu cầu xác thực khi đăng ký</li>
            <li><strong>Giám sát nội dung:</strong> Kiểm duyệt ảnh và tin nhắn</li>
            <li><strong>Báo cáo:</strong> Hệ thống báo cáo và chặn người dùng</li>
            <li><strong>Đội ngũ an toàn:</strong> 24/7 xử lý vi phạm</li>
        </ul>
        
        <h2>⚠️ Báo cáo vi phạm</h2>
        <p>
            Nếu bạn phát hiện:
        </p>
        <ul>
            <li>Người dưới 18 tuổi sử dụng ứng dụng</li>
            <li>Nội dung không phù hợp liên quan đến trẻ em</li>
            <li>Hành vi đáng ngờ hoặc quấy rối</li>
        </ul>
        <p>
            Vui lòng báo cáo ngay:
        </p>
        <ul>
            <li>Trong ứng dụng: Nhấn nút "Báo cáo" trên hồ sơ người dùng</li>
            <li>Email khẩn cấp: <a href="mailto:safety@saigonmatch.com">safety@saigonmatch.com</a></li>
        </ul>
        
        <h2>🔍 Hợp tác với cơ quan chức năng</h2>
        <p>
            Chúng tôi hợp tác với cơ quan chức năng và tổ chức bảo vệ trẻ em 
            để ngăn chặn và xử lý các vi phạm nghiêm trọng.
        </p>
        
        <h2>📚 Tài nguyên hỗ trợ</h2>
        <p>
            Nếu bạn hoặc ai đó bạn biết cần hỗ trợ về an toàn trẻ em:
        </p>
        <ul>
            <li>Đường dây nóng bảo vệ trẻ em: 111</li>
            <li>Cảnh sát: 113</li>
        </ul>
        
        <p style="margin-top: 30px; font-style: italic;">
            Cập nhật lần cuối: 06/10/2026
        </p>
        
        <a href="index.html" class="back-link">← Quay lại trang chủ</a>
    </div>
</body>
</html>`;
