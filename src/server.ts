import express from 'express';
import { PostgrestError, createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const PORT: number = 3001;
const app = express();
const cors = require('cors');
const supabase = createClient(
  process.env.SUPABASE_URL ?? '',
  process.env.SUPABASE_KEY ?? ''
);

app.use(cors());

app.get('/api/v1/courses', async (req, res) => {
  const { school, department, courseNumber } = req.query;

  const courseTitle: string = await getCourseTitle(
    school as string,
    department as string,
    courseNumber as string
  );

  res.json({ courseTitle });
});

async function getCourseTitle(
  school: string,
  department: string,
  courseNumber: string
): Promise<string> {
  const { data, error }: { data: any[] | null; error: PostgrestError | null } =
    await supabase
      .from('course')
      .select('*')
      .eq('school', school)
      .eq('department', department)
      .eq('course_number', courseNumber);

  if (error) {
    console.error('getCourseTitle Error:', error);

    return '';
  }

  return data?.[0]?.course_title ?? '';
}

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
