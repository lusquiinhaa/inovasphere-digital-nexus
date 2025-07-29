import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://your-project.supabase.co'
const supabaseKey = 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseKey)

export type ContactForm = {
  id?: string
  nome: string
  email: string
  telefone: string
  mensagem: string
  created_at?: string
}

export const submitContactForm = async (formData: Omit<ContactForm, 'id' | 'created_at'>) => {
  try {
    const { data, error } = await supabase
      .from('contacts')
      .insert([formData])
      .select()

    if (error) {
      throw error
    }

    return { success: true, data }
  } catch (error) {
    console.error('Erro ao enviar formulário:', error)
    return { success: false, error }
  }
}