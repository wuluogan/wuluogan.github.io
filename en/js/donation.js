(function() {
    // 创建模态框 打赏
    function createDonationModal() {
      const style = document.createElement('style');
      style.textContent = `
        #donationModal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          display: none;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 0 16px;
          box-sizing: border-box;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        #donationModal.active {
          display: flex;
          opacity: 1;
        }
        
        .modal-content {
          background-color: var(--ifm-navbar-background-color);
          border-radius: 12px;
          width: 100%;
          max-width: 400px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          transform: scale(0.95);
          transition: transform 0.3s ease;
        }
        
        #donationModal.active .modal-content {
          transform: scale(1);
        }
        
        .modal-header {
          padding: 16px 20px;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .modal-header h3 {
            text-align: center;
            width: 100%;
            margin: 0 auto;
        }
        
        .payment-option h4 {
            text-align: center;
            margin: 12px 0;
        }
        
        .close-btn {
          font-size: 24px;
          color: #9ca3af;
          cursor: pointer;
          background: none;
          border: none;
        }
        
        .modal-body {
          padding: 24px 20px;
        }
        
        .payment-options {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        
        @media (min-width: 640px) {
          .payment-options {
            grid-template-columns: 1fr 1fr;
          }
        }
        
        .payment-option img {
          width: 100%;
          max-width: 180px;
          height: auto;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
        }
        
        .modal-open {
          overflow: hidden;
        }
      `;
      document.head.appendChild(style);
  
      const modal = document.createElement('div');
      modal.id = 'donationModal';
      modal.innerHTML = `
        <div class="modal-content">
          <div class="modal-header">
            <h3>感谢支持</h3>
            <button class="close-btn">×</button>
          </div>
          <div class="modal-body">
            <div class="payment-options">
              <div class="payment-option">
                <h4>微信</h4>
                <img src="/img/qr-wechat.jpg" alt="微信赞赏码">
              </div>
              <div class="payment-option">
                <h4>支付宝</h4>
                <img src="/img/qr-alipay.jpg" alt="支付宝收款码">
              </div>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
  
      // 关闭功能
      modal.querySelector('.close-btn').addEventListener('click', closeModal);
      modal.addEventListener('click', (e) => e.target === modal && closeModal());
  
      function closeModal() {
        modal.classList.remove('active');
        setTimeout(() => {
          modal.style.display = 'none';
          document.body.classList.remove('modal-open');
        }, 300);
      }
  
      return modal;
    }
  
    // 初始化
    function initDonation() {
      const modal = createDonationModal();
  
      // 事件委托处理所有点击
      document.addEventListener('click', function(e) {
        const donationLink = e.target.closest('.donation-link, [href="#donate"]');
        if (!donationLink) return;
  
        e.preventDefault();
        
        // 如果是移动端菜单
        if (document.querySelector('.navbar-sidebar--show')) {
          document.querySelector('.navbar__toggle').click();
          setTimeout(() => openModal(modal), 350);
        } else {
          openModal(modal);
        }
      });
  
      function openModal(modal) {
        modal.style.display = 'flex';
        requestAnimationFrame(() => {
          modal.classList.add('active');
          document.body.classList.add('modal-open');
        });
      }
    }
  
    // 启动
    if (document.readyState === 'complete') {
      initDonation();
    } else {
      window.addEventListener('load', initDonation);
    }
  })();