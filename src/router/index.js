import { createRouter, createWebHistory } from 'vue-router';
// Public pages
import LoginPage from '../views/pages/auth/LoginPage.vue';
import RegisterPage from '../views/pages/auth/RegisterPage.vue';
import ForgotPasswordPage from '../views/pages/auth/ForgotPasswordPage.vue';
import ResetPasswordPage from '../views/pages/auth/ResetPasswordPage.vue';
import LandingPage from '../views/pages/LandingPage.vue';
import ConfirmPasswordPage from '../views/pages/auth/ConfirmPasswordPage.vue';

// New dashboard pages
import HomePage from '../views/pages/HomePage.vue';
import ProfilePage from '../views/pages/ProfilePage.vue';
import MyApplicationsPage from '../views/pages/MyApplicationsPage.vue';
import SavedJobsPage from '../views/pages/SavedJobsPage.vue';
import ApplicationDetailsPage from '../views/pages/ApplicationDetailsPage.vue';
import SearchPage from '../views/pages/SearchPage.vue';
import JobPostingsPage from '../views/pages/JobPostingsPage.vue';
import SubmittedApplicationsPage from '../views/pages/SubmittedApplicationsPage.vue';
import PendingApplicationsPage from '../views/pages/PendingApplicationsPage.vue';
import ProjectsPage from '../views/pages/ProjectsPage.vue';
import ContractsPage from '../views/pages/ContractsPage.vue';
import PendingContractsPage from '../views/pages/PendingContractsPage.vue';
import NotificationsPage from '../views/pages/NotificationsPage.vue';
import AvailableProjectsPage from '../views/pages/AvailableProjectsPage.vue';
import MyContractsPage from '../views/pages/MyContractsPage.vue';

const routes = [
    { path: '/', component: LandingPage, meta: { layout: 'FullwidthLayout', pageTitle: 'Welcome' } },
    { path: '/login', component: LoginPage, meta: { layout: 'FullwidthLayout', pageTitle: 'Login' } },
    { path: '/register', component: RegisterPage, meta: { layout: 'FullwidthLayout', pageTitle: 'Register' } },
    { path: '/forgot-password', component: ForgotPasswordPage, meta: { layout: 'FullwidthLayout', pageTitle: 'Forgot Password' } },
    { path: '/reset-password', component: ResetPasswordPage, meta: { layout: 'FullwidthLayout', pageTitle: 'Reset Password' } },
    { path: '/confirm-password', component: ConfirmPasswordPage, meta: { layout: 'FullwidthLayout', pageTitle: 'Confirm Password' } },
  
  // Dashboard pages
  { path: '/dashboard/home', component: HomePage, meta: { layout: 'DashboardLayout', pageTitle: 'Dashboard Home' } },
  { path: '/dashboard/profile', component: ProfilePage, meta: { layout: 'DashboardLayout', pageTitle: 'Profile' } },
  { path: '/dashboard/my-applications', component: MyApplicationsPage, meta: { layout: 'DashboardLayout', pageTitle: 'My Applications' } },
  { path: '/dashboard/saved-jobs', component: SavedJobsPage, meta: { layout: 'DashboardLayout', pageTitle: 'Saved Jobs' } },
  { path: '/dashboard/application-details', component: ApplicationDetailsPage, meta: { layout: 'DashboardLayout', pageTitle: 'Application Details' } },
  { path: '/dashboard/search', component: SearchPage, meta: { layout: 'DashboardLayout', pageTitle: 'Search' } },
  { path: '/dashboard/job-postings', component: JobPostingsPage, meta: { layout: 'DashboardLayout', pageTitle: 'Job Postings' } },
  { path: '/dashboard/submitted-applications', component: SubmittedApplicationsPage, meta: { layout: 'DashboardLayout', pageTitle: 'Submitted Applications' } },
  { path: '/dashboard/pending-applications', component: PendingApplicationsPage, meta: { layout: 'DashboardLayout', pageTitle: 'Pending Applications' } },
  { path: '/dashboard/projects', component: ProjectsPage, meta: { layout: 'DashboardLayout', pageTitle: 'Projects' } },
  { path: '/dashboard/contracts', component: ContractsPage, meta: { layout: 'DashboardLayout', pageTitle: 'Contracts' } },
  { path: '/dashboard/pending-contracts', component: PendingContractsPage, meta: { layout: 'DashboardLayout', pageTitle: 'Pending Contracts' } },
  { path: '/dashboard/notifications', component: NotificationsPage, meta: { layout: 'DashboardLayout', pageTitle: 'Notifications' } },
  { path: '/dashboard/available-projects', component: AvailableProjectsPage, meta: { layout: 'DashboardLayout', pageTitle: 'Available Projects' } },
  { path: '/dashboard/my-contracts', component: MyContractsPage, meta: { layout: 'DashboardLayout', pageTitle: 'My Contracts' } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to) => {
  const title = to.meta.pageTitle || 'Job Portal';
  document.title = `${title} | Bride App`;
});

export default router;
