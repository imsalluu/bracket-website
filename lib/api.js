import { supabase } from './supabase';

export async function getSiteSettings() {
  const { data, error } = await supabase
    .from('site_settings')
    .select('*');
  
  if (error) {
    console.error('Error fetching site settings:', error);
    return {};
  }

  return data.reduce((acc, setting) => {
    acc[setting.id] = setting.content;
    return acc;
  }, {});
}

export async function getProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
  return data;
}

export async function getTestimonials() {
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
  return data;
}
