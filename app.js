// Estado da aplicação
const state = {
    currentRoute: '/dashboard',
    notifications: 3,
    user: {
      name: 'Edvaldo',
      avatar: 'EJ'
    }
  };
  
  // Conteúdo das páginas
  const pages = {
    '/dashboard': `
      <div class="page active" id="dashboard-page">
        <h1 class="page-title">Dashboard Geral</h1>
        
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-value">24</div>
            <div class="stat-label">Casos Ativos</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">12</div>
            <div class="stat-label">Tarefas Pendentes</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">8</div>
            <div class="stat-label">Documentos Pendentes</div>
          </div>
          <div class="stat-card">
            <div class="stat-value">5</div>
            <div class="stat-label">Próximos Eventos</div>
          </div>
        </div>
        
        <h2 class="page-subtitle">Atividades Recentes</h2>
        <div class="card-grid">
          <div class="card">
            <h3 class="card-title">Novo Caso Criado</h3>
            <p class="card-content">Pedido de visto para João Silva foi registrado no sistema.</p>
          </div>
          <div class="card">
            <h3 class="card-title">Documento Aprovado</h3>
            <p class="card-content">Tradução juramentada do diploma foi aprovada.</p>
          </div>
          <div class="card">
            <h3 class="card-title">Lembrete de Tarefa</h3>
            <p class="card-content">Reunião com cliente agendada para amanhã às 14h.</p>
          </div>
        </div>
      </div>
    `,
    
    '/casos': `
      <div class="page active" id="casos-page">
        <h1 class="page-title">Gestão de Casos</h1>
        <div class="card-grid">
          <div class="card">
            <h3 class="card-title">Casos Ativos</h3>
            <p class="card-content">Visualize e gerencie todos os casos ativos no sistema.</p>
          </div>
          <div class="card">
            <h3 class="card-title">Novo Caso</h3>
            <p class="card-content">Inicie um novo processo de imigração para um cliente.</p>
          </div>
          <div class="card">
            <h3 class="card-title">Histórico</h3>
            <p class="card-content">Acesse o histórico completo de todos os casos.</p>
          </div>
        </div>
      </div>
    `,
    
    '/tarefas': `
      <div class="page active" id="tarefas-page">
        <h1 class="page-title">Gestão de Tarefas</h1>
        <div class="card-grid">
          <div class="card">
            <h3 class="card-title">Tarefas Pendentes</h3>
            <p class="card-content">Lista de todas as tarefas que precisam ser realizadas.</p>
          </div>
          <div class="card">
            <h3 class="card-title">Minhas Tarefas</h3>
            <p class="card-content">Tarefas atribuídas especificamente a você.</p>
          </div>
          <div class="card">
            <h3 class="card-title">Calendário de Tarefas</h3>
            <p class="card-content">Visualize as tarefas em um calendário interativo.</p>
          </div>
        </div>
      </div>
    `,
    
    '/documentos': `
      <div class="page active" id="documentos-page">
        <h1 class="page-title">Gestão de Documentos</h1>
        <div class="card-grid">
          <div class="card">
            <h3 class="card-title">Documentos Pendentes</h3>
            <p class="card-content">Documentos que aguardam revisão ou aprovação.</p>
          </div>
          <div class="card">
            <h3 class="card-title">Biblioteca de Documentos</h3>
            <p class="card-content">Acesse modelos e documentos previamente aprovados.</p>
          </div>
          <div class="card">
            <h3 class="card-title">Upload de Documentos</h3>
            <p class="card-content">Faça upload de novos documentos para o sistema.</p>
          </div>
        </div>
      </div>
    `,
    
    '/calendario': `
      <div class="page active" id="calendario-page">
        <h1 class="page-title">Calendário</h1>
        <div class="card-grid">
          <div class="card">
            <h3 class="card-title">Eventos do Mês</h3>
            <p class="card-content">Visualize todos os eventos agendados para este mês.</p>
          </div>
          <div class="card">
            <h3 class="card-title">Próximos Prazos</h3>
            <p class="card-content">Prazos importantes que estão se aproximando.</p>
          </div>
          <div class="card">
            <h3 class="card-title">Agendar Evento</h3>
            <p class="card-content">Crie um novo evento ou lembrete no calendário.</p>
          </div>
        </div>
      </div>
    `,
    
    '/notificacoes': `
      <div class="page active" id="notificacoes-page">
        <h1 class="page-title">Notificações</h1>
        <div class="card-grid">
          <div class="card">
            <h3 class="card-title">Novo caso atribuído</h3>
            <p class="card-content">Você foi designado para o caso #1234.</p>
          </div>
          <div class="card">
            <h3 class="card-title">Documento aprovado</h3>
            <p class="card-content">Seu documento de identificação foi aprovado.</p>
          </div>
          <div class="card">
            <h3 class="card-title">Lembrete de reunião</h3>
            <p class="card-content">Reunião com cliente em 2 horas.</p>
          </div>
        </div>
      </div>
    `,
    
    '/suporte': `
      <div class="page active" id="suporte-page">
        <h1 class="page-title">Suporte</h1>
        <div class="card-grid">
          <div class="card">
            <h3 class="card-title">Central de Ajuda</h3>
            <p class="card-content">Encontre respostas para as perguntas mais frequentes.</p>
          </div>
          <div class="card">
            <h3 class="card-title">Contatar Suporte</h3>
            <p class="card-content">Entre em contato com nossa equipe de suporte técnico.</p>
          </div>
          <div class="card">
            <h3 class="card-title">Relatar Problema</h3>
            <p class="card-content">Relate um problema técnico ou bug no sistema.</p>
          </div>
        </div>
      </div>
    `
  };
  
  // Função para navegar entre páginas
  function navigateTo(route) {
    // Atualiza o estado
    state.currentRoute = route;
    
    // Atualiza o conteúdo principal
    const mainContent = document.getElementById('main-content');
    
    if (pages[route]) {
      mainContent.innerHTML = pages[route];
    } else {
      mainContent.innerHTML = `
        <div class="page active">
          <h1 class="page-title">Página em Desenvolvimento</h1>
          <p>Esta funcionalidade está em desenvolvimento e estará disponível em breve.</p>
        </div>
      `;
    }
    
    // Atualiza o link ativo na sidebar
    document.querySelectorAll('.sidebar-link').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-route') === route) {
        link.classList.add('active');
      }
    });
    
    // Atualiza o título da topbar se necessário
    if (route === '/dashboard') {
      document.querySelector('.topbar-env').textContent = 'Dashboard Geral';
    } else {
      const routeName = route.substring(1); // Remove a barra inicial
      document.querySelector('.topbar-env').textContent = 
        routeName.charAt(0).toUpperCase() + routeName.slice(1);
    }
  }
  
  // Função para inicializar a aplicação
  function initApp() {
    // Configura os event listeners para navegação
    document.querySelectorAll('[data-route]').forEach(element => {
      element.addEventListener('click', () => {
        const route = element.getAttribute('data-route');
        navigateTo(route);
      });
    });
    
    // Inicializa com a página do dashboard
    navigateTo('/dashboard');
    
    // Configura o badge de notificações
    const badge = document.getElementById('badge-notificacoes');
    if (badge) {
      badge.textContent = state.notifications;
    }
    
    // Adiciona funcionalidade de toggle para a sidebar em telas pequenas
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    
    // Adiciona um botão de toggle para a sidebar em telas pequenas
    const toggleSidebar = document.createElement('button');
    toggleSidebar.innerHTML = '☰';
    toggleSidebar.className = 'toggle-sidebar';
    toggleSidebar.style.cssText = `
      display: none;
      position: fixed;
      top: 15px;
      left: 15px;
      z-index: 1000;
      background: #3498db;
      color: white;
      border: none;
      border-radius: 4px;
      width: 40px;
      height: 40px;
      font-size: 1.2rem;
      cursor: pointer;
    `;
    
    document.body.appendChild(toggleSidebar);
    
    toggleSidebar.addEventListener('click', () => {
      sidebar.classList.toggle('sidebar-open');
    });
    
    // Media query para mostrar/ocultar o botão de toggle
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    
    function handleMediaChange(e) {
      if (e.matches) {
        toggleSidebar.style.display = 'block';
        sidebar.classList.remove('sidebar-open');
      } else {
        toggleSidebar.style.display = 'none';
        sidebar.classList.add('sidebar-open');
      }
    }
    
    mediaQuery.addListener(handleMediaChange);
    handleMediaChange(mediaQuery);
    
    // Adiciona estilos para a sidebar em estado aberto/fechado
    const style = document.createElement('style');
    style.textContent = `
      @media (max-width: 768px) {
        .sidebar {
          position: fixed;
          left: -260px;
          height: 100%;
          transition: left 0.3s;
          z-index: 100;
        }
        
        .sidebar-open {
          left: 0;
        }
        
        .sidebar-open + .content::after {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          z-index: 99;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  // Inicializa a aplicação quando o DOM estiver carregado
  document.addEventListener('DOMContentLoaded', initApp);