-- Create a table for newsletter subscribers
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS newsletter_subscribers_email_idx ON newsletter_subscribers (email);

-- Enable Row Level Security
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserts from authenticated users or the service role
CREATE POLICY "Allow inserts for all" ON newsletter_subscribers
  FOR INSERT TO authenticated, anon
  WITH CHECK (true);

-- Create a policy that allows the service role to read all subscribers
CREATE POLICY "Allow service role to read all subscribers" ON newsletter_subscribers
  FOR SELECT TO service_role
  USING (true);
